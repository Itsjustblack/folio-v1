import { exchangeCodeForTokens } from "@/lib/spotify";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const url = new URL(request.url);
	const code = url.searchParams.get("code");
	const state = url.searchParams.get("state");
	const error = url.searchParams.get("error");
	const origin = url.origin;

	const cookieStore = await cookies();

	const storedState = cookieStore.get("spotify_auth_state")?.value;

	cookieStore.delete("spotify_auth_state");

	if (error) {
		return NextResponse.redirect(`${origin}?spotify_error=${error}`);
	}

	if (!state || state !== storedState) {
		return NextResponse.redirect(`${origin}?spotify_error=state_mismatch`);
	}

	if (!code) {
		return NextResponse.redirect(`${origin}?spotify_error=missing_code`);
	}

	try {
		const data = await exchangeCodeForTokens(code);

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

		if (data.refresh_token) {
			cookieStore.set("spotify_refresh_token", data.refresh_token, {
				...cookieOptions,
				maxAge: 30 * 24 * 60 * 60, // 30 days
			});
		}

		cookieStore.set(
			"spotify_token_expiry",
			String(Math.floor(Date.now() / 1000) + data.expires_in),
			{
				...cookieOptions,
				maxAge: 30 * 24 * 60 * 60,
			},
		);

		revalidateTag("spotify-tracks", "max");

		return NextResponse.redirect(origin);
	} catch {
		return NextResponse.redirect(
			`${origin}?spotify_error=token_exchange_failed`,
		);
	}
}
