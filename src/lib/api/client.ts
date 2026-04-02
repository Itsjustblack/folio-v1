import { SPOTIFY_BASE_URL } from "../constants";

export async function apiFetch<T>(
	path: string,
	token: string,
	init?: RequestInit,
): Promise<T> {
	const res = await fetch(`${SPOTIFY_BASE_URL}${path}`, {
		...init,
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
			...init?.headers,
		},
	});

	if (!res.ok) {
		throw new Error(`Spotify API error: ${res.status} ${res.statusText}`);
	}

	return res.json() as Promise<T>;
}
