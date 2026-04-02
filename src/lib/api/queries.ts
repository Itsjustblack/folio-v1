import { SPOTIFY_TOKEN_URL } from "../constants";
import { apiFetch } from "./client";
import type { SpotifyPlaylist, SpotifyToken } from "./types";

const CLIENT_ID = process.env.NEXT_PUBLIC_VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_VITE_SPOTIFY_CLIENT_SECRET;

export async function getSpotifyToken(): Promise<SpotifyToken> {
	const credentials = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

	const res = await fetch(SPOTIFY_TOKEN_URL, {
		method: "POST",
		headers: {
			Authorization: `Basic ${credentials}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: "grant_type=client_credentials",
	});

	if (!res.ok) {
		throw new Error(
			`Failed to get Spotify token: ${res.status} ${res.statusText}`,
		);
	}

	return res.json() as Promise<SpotifyToken>;
}

export async function getPlaylist(
	playlistId: string,
): Promise<SpotifyPlaylist> {
	const { access_token } = await getSpotifyToken();
	return apiFetch<SpotifyPlaylist>(`/playlists/${playlistId}`, access_token);
}
