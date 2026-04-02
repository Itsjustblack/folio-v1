"use client";

import { useQuery } from "@tanstack/react-query";
import { getPlaylist } from "../lib/api/queries";
import useSpotifyAuth from "./use-spotify-auth";

export function usePlaylist(playlistId: string) {
	const auth = useSpotifyAuth();
	return useQuery({
		queryKey: ["playlist", playlistId],
		queryFn: () => getPlaylist(playlistId),
		enabled: !!playlistId && !!auth.accessToken,
	});
}
