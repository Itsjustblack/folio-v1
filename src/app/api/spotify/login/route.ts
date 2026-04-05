import { buildAuthorizeUrl } from "@/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
	const state = crypto.randomUUID();

	const response = NextResponse.redirect(buildAuthorizeUrl(state));

	response.cookies.set("spotify_auth_state", state, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		maxAge: 300,
		path: "/",
	});

	return response;
}
