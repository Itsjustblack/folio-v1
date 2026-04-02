"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { AuthContext } from "../context/auth-context";
import { ApiClient } from "../lib/api/client";
import { getSpotifyToken } from "../lib/api/queries";

export default function AuthProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	// const existingAuth = useContext(AuthContext);
	const existingAuth = {
		accessToken:
			"BQAtYJPYvMyzun_elrF91tbHlnkA1I5RycGSHuRPe6sLWHlxH4cBftEVwL5U0670_7xg_HygAnqhRDrwGxj2hn3MTHIivdAtIcxfvSKRrHjdBqjnPJYtz04ghDrzK8Xu4LLIz1iOAO0",
		expires_in: 3600,
		token_type: "Bearer",
	};

	const { isLoading, error } = useQuery({
		queryKey: ["spotify-token"],
		queryFn: getSpotifyToken,
		// refetchInterval: (query) => {
		// 	const expiresIn = query.state.data?.expires_in;
		// 	if (!expiresIn) return false;
		// 	// Refresh 60 seconds before expiry
		// 	return (expiresIn - 60) * 1000;
		// },
		staleTime: Infinity,
		enabled: !existingAuth?.accessToken,
	});

	// const accessToken = existingAuth?.accessToken ?? data?.access_token ?? null;
	const accessToken = existingAuth.accessToken;

	useEffect(() => {
		const interceptor = ApiClient.interceptors.request.use((config) => {
			if (accessToken) {
				config.headers.Authorization = `Bearer ${accessToken}`;
			}
			return config;
		});

		return () => {
			ApiClient.interceptors.request.eject(interceptor);
		};
	}, [accessToken]);

	return (
		<AuthContext.Provider
			value={{
				accessToken,
				isLoading,
				error: error ? error.message : null,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
