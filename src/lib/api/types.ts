export interface SpotifyToken {
	access_token: string;
	token_type: string;
	expires_in: number;
}

export interface SpotifyAuthTokenResponse {
	access_token: string;
	token_type: string;
	scope: string;
	expires_in: number;
	refresh_token?: string;
}

export interface SpotifyImage {
	url: string;
	height: number | null;
	width: number | null;
}

export interface SpotifyArtist {
	name: string;
	id: string;
	href: string;
	uri: string;
	type: "artist";
	external_urls: { spotify: string };
}

export interface SpotifyAlbum {
	id: string;
	name: string;
	album_type: string;
	images: SpotifyImage[];
	artists: SpotifyArtist[];
	release_date: string;
	release_date_precision: string;
	total_tracks: number;
	href: string;
	uri: string;
	type: "album";
	is_playable: boolean;
	external_urls: { spotify: string };
}

export interface SpotifyTrack {
	id: string;
	name: string;
	artists: SpotifyArtist[];
	album: SpotifyAlbum;
	duration_ms: number;
	disc_number: number;
	track_number: number;
	explicit: boolean;
	is_playable: boolean;
	is_local: boolean;
	href: string;
	uri: string;
	type: "track";
	track: true;
	episode: false;
	external_ids: { isrc: string };
	external_urls: { spotify: string };
}

export interface SpotifyPlaylistItem {
	added_at: string;
	added_by: {
		id: string;
		href: string;
		uri: string;
		type: "user";
		external_urls: { spotify: string };
	};
	is_local: boolean;
	primary_color: string | null;
	item: SpotifyTrack;
	video_thumbnail: { url: string | null };
}

export interface SpotifyPlaylistOwner {
	external_urls: { spotify: string };
	href: string;
	id: string;
	type: string;
	uri: string;
	display_name: string | null;
}

export interface SpotifyPlaylist {
	collaborative: boolean;
	id: string;
	name: string;
	description: string | null;
	images: SpotifyImage[];
	external_urls: { spotify: string };
	href: string;
	owner: SpotifyPlaylistOwner;
	public: boolean | null;
	snapshot_id: string;
	items: {
		href: string;
		total: number;
	};
	type: "playlist";
	uri: string;
}

export interface SpotifyPlaylistsResponse {
	href: string;
	limit: number;
	next: string | null;
	offset: number;
	previous: string | null;
	total: number;
	items: SpotifyPlaylist[];
}

export interface SpotifyPlaylistTracksResponse {
	href: string;
	limit: number;
	next: string | null;
	offset: number;
	previous: string | null;
	total: number;
	items: SpotifyPlaylistItem[];
}
