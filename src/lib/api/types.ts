export interface SpotifyToken {
	access_token: string;
	token_type: string;
	expires_in: number;
}

export interface SpotifyImage {
	url: string;
	height: number | null;
	width: number | null;
}

export interface SpotifyArtist {
	name: string;
	external_urls: { spotify: string };
}

export interface SpotifyAlbum {
	name: string;
	images: SpotifyImage[];
	external_urls: { spotify: string };
}

export interface SpotifyTrack {
	id: string;
	name: string;
	artists: SpotifyArtist[];
	album: SpotifyAlbum;
	duration_ms: number;
	preview_url: string | null;
	external_urls: { spotify: string };
	uri: string;
	type: "track";
}

export interface SpotifyPlaylistItem {
	added_at: string;
	is_local: boolean;
	track: SpotifyTrack;
}

export interface SpotifyPlaylist {
	id: string;
	name: string;
	description: string | null;
	images: SpotifyImage[];
	external_urls: { spotify: string };
	tracks: {
		href: string;
		total: number;
		items: SpotifyPlaylistItem[];
	};
}
