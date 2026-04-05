import { getAccessToken, refreshAccessToken, SPOTIFY_BASE_URL } from "@/lib/spotify";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

async function proxyToSpotify(request: NextRequest) {
	try {
		let accessToken = await getAccessToken();

		if (!accessToken) {
			return NextResponse.json(
				{ error: "not_authenticated", login_url: "/api/spotify/login" },
				{ status: 401 },
			);
		}

		const url = new URL(request.url);
		const spotifyPath = url.pathname.replace(/^\/api\/spotify/, "");
		const spotifyUrl = `${SPOTIFY_BASE_URL}${spotifyPath}${url.search}`;

		let res = await fetch(spotifyUrl, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
			cache: "no-store",
		});

		// Token rejected — try refreshing once
		if (res.status === 401) {
			const cookieStore = await cookies();
			const refreshToken = cookieStore.get("spotify_refresh_token")?.value;

			if (!refreshToken) {
				return NextResponse.json(
					{ error: "not_authenticated", login_url: "/api/spotify/login" },
					{ status: 401 },
				);
			}

			try {
				const data = await refreshAccessToken(refreshToken);
				accessToken = data.access_token;

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

				res = await fetch(spotifyUrl, {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
					cache: "no-store",
				});
			} catch {
				// Refresh failed — clear cookies, user needs to re-auth
				cookieStore.delete("spotify_access_token");
				cookieStore.delete("spotify_refresh_token");
				cookieStore.delete("spotify_token_expiry");

				return NextResponse.json(
					{ error: "not_authenticated", login_url: "/api/spotify/login" },
					{ status: 401 },
				);
			}
		}

		return NextResponse.json(await res.json(), { status: res.status });
	} catch {
		return NextResponse.json(
			{ error: "Failed to fetch from Spotify" },
			{ status: 500 },
		);
	}
}

export const GET = proxyToSpotify;
