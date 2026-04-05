import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
	const cookieStore = await cookies();
	cookieStore.delete("spotify_access_token");
	cookieStore.delete("spotify_refresh_token");
	cookieStore.delete("spotify_token_expiry");

	return NextResponse.json({ success: true });
}
