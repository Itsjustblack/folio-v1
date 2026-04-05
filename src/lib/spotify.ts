import { cacheLife, cacheTag } from "next/cache";
import { cookies } from "next/headers";
import type {
	SpotifyAuthTokenResponse,
	SpotifyImage,
	SpotifyPlaylistTracksResponse,
	SpotifyPlaylistsResponse,
} from "./api/types";

export const SPOTIFY_BASE_URL = "https://api.spotify.com/v1";
export const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";
export const SPOTIFY_AUTHORIZE_URL = "https://accounts.spotify.com/authorize";
const SCOPES = "playlist-read-private playlist-read-collaborative";

export class SpotifyAuthError extends Error {
	constructor() {
		super("Not authenticated with Spotify");
		this.name = "SpotifyAuthError";
	}
}

// Helper Functions
function getBasicAuthHeader() {
	return Buffer.from(
		`${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
	).toString("base64");
}

export function buildAuthorizeUrl(state: string): string {
	const params = new URLSearchParams({
		client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
		response_type: "code",
		redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
		scope: SCOPES,
		state,
	});

	return `${SPOTIFY_AUTHORIZE_URL}?${params.toString()}`;
}

export async function exchangeCodeForTokens(
	code: string,
): Promise<SpotifyAuthTokenResponse> {
	const res = await fetch(SPOTIFY_TOKEN_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: `Basic ${getBasicAuthHeader()}`,
		},
		body: new URLSearchParams({
			grant_type: "authorization_code",
			code,
			redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
		}),
	});

	if (!res.ok) {
		throw new Error(`Failed to exchange code for tokens: ${res.status}`);
	}

	return res.json() as Promise<SpotifyAuthTokenResponse>;
}

export async function refreshAccessToken(
	refreshToken: string,
): Promise<SpotifyAuthTokenResponse> {
	const res = await fetch(SPOTIFY_TOKEN_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: `Basic ${getBasicAuthHeader()}`,
		},
		body: new URLSearchParams({
			grant_type: "refresh_token",
			refresh_token: refreshToken,
		}),
	});

	if (!res.ok) {
		throw new Error(`Failed to refresh token: ${res.status}`);
	}

	return res.json() as Promise<SpotifyAuthTokenResponse>;
}

export async function getAccessToken() {
	const cookieStore = await cookies();
	const refreshToken = cookieStore.get("spotify_refresh_token")?.value;

	if (!refreshToken) {
		return null;
	}

	const accessToken = cookieStore.get("spotify_access_token")?.value;
	const expiry = cookieStore.get("spotify_token_expiry")?.value;

	// Return existing token if not expired (with 60s buffer)
	if (accessToken && expiry) {
		const expiryTime = Number(expiry);
		if (Date.now() / 1000 < expiryTime - 60) {
			return accessToken;
		}
	}

	// Token expired or missing — refresh it
	const data = await refreshAccessToken(refreshToken);

	const cookieOptions = {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax" as const,
		path: "/",
	};

	cookieStore.set("spotify_access_token", data.access_token, {
		...cookieOptions,
		maxAge: data.expires_in,
	});

	cookieStore.set(
		"spotify_token_expiry",
		String(Math.floor(Date.now() / 1000) + data.expires_in),
		{
			...cookieOptions,
			maxAge: 30 * 24 * 60 * 60,
		},
	);

	if (data.refresh_token) {
		cookieStore.set("spotify_refresh_token", data.refresh_token, {
			...cookieOptions,
			maxAge: 30 * 24 * 60 * 60,
		});
	}

	return data.access_token;
}

async function getUserPlaylist(accessToken: string): Promise<string | null> {
	const playlistsRes = await fetch(
		`${SPOTIFY_BASE_URL}/me/playlists?limit=1&offset=0`,
		{
			headers: { Authorization: `Bearer ${accessToken}` },
			cache: "no-store",
		},
	);

	if (!playlistsRes.ok) return null;

	const playlists: SpotifyPlaylistsResponse = await playlistsRes.json();
	return playlists.items[0]?.id ?? null;
}

async function fetchPlaylistTracks(
	accessToken: string,
	playlistId: string,
): Promise<SpotifyImage[]> {
	"use cache";
	cacheLife("hours");
	cacheTag("spotify-tracks");

	const tracksRes = await fetch(
		`${SPOTIFY_BASE_URL}/playlists/${playlistId}/items?limit=11&offset=0`,
		{
			headers: { Authorization: `Bearer ${accessToken}` },
			cache: "no-store",
		},
	);

	if (!tracksRes.ok) return [];

	const tracks: SpotifyPlaylistTracksResponse = await tracksRes.json();
	return tracks.items.map((item) => item.item.album.images[0]); // Derive their images for the carousel
}

export async function getPlaylistTracks(): Promise<SpotifyImage[]> {
	const accessToken = await getAccessToken();
	if (!accessToken) return [];

	const playlistId = await getUserPlaylist(accessToken);
	if (!playlistId) return [];

	return fetchPlaylistTracks(accessToken, playlistId);
}
