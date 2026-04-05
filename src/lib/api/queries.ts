import { SpotifyAuthError } from "../spotify";
import type {
	SpotifyPlaylistsResponse,
	SpotifyPlaylistTracksResponse,
} from "./types";

export async function getSpotifyAuthStatus(): Promise<{
	authenticated: boolean;
}> {
	const res = await fetch("/api/spotify/auth-status");
	return res.json();
}

export async function spotifyLogout(): Promise<void> {
	await fetch("/api/spotify/logout", { method: "POST" });
}

export async function getUserPlaylists(queryParams: {
	limit: number;
	offset: number;
}) {
	const res = await fetch(
		`/api/spotify/me/playlists?limit=${queryParams.limit}&offset=${queryParams.offset}`,
	);

	if (!res.ok) {
		const data = await res.json();
		if (res.status === 401 && data.error === "not_authenticated") {
			throw new SpotifyAuthError();
		}
		throw new Error(`Spotify API error: ${res.status} ${res.statusText}`);
	}

	return res.json() as Promise<SpotifyPlaylistsResponse>;
}

export async function getPlaylistTracks(
	playlistId: string,
	queryParams: { limit: number; offset: number },
) {
	const res = await fetch(
		`/api/spotify/playlists/${playlistId}/items?limit=${queryParams.limit}&offset=${queryParams.offset}`,
	);

	if (!res.ok) {
		const data = await res.json();
		if (res.status === 401 && data.error === "not_authenticated") {
			throw new SpotifyAuthError();
		}
		throw new Error(`Spotify API error: ${res.status} ${res.statusText}`);
	}

	return res.json() as Promise<SpotifyPlaylistTracksResponse>;
}
