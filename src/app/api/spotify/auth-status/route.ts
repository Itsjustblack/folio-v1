import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
	const cookieStore = await cookies();
	const authenticated = cookieStore.has("spotify_refresh_token");

	return NextResponse.json({ authenticated });
}
