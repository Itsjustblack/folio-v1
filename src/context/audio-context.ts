"use client";

import { createContext, useContext } from "react";

export interface ISound {
	src: string;
	loop: boolean;
	volume?: number;
	playbackRate?: number;
}

export const SOUNDS = {
	vinyl: {
		src: "/audio/light-jazz.mp3",
		loop: true,
		volume: 0.25,
		playbackRate: 0.9,
	},
	tap: { src: "/audio/tap.wav", loop: false, volume: 0.4 },
} as const satisfies Record<string, ISound>;

export type SoundName = keyof typeof SOUNDS;

export interface AudioContextValue {
	play: (name: SoundName) => void;
	pause: (name: SoundName) => void;
	toggle: (name: SoundName) => void;
	isPlaying: (name: SoundName) => boolean;
}

export const AudioContext = createContext<AudioContextValue | null>(null);

export function useSound() {
	const ctx = useContext(AudioContext);
	if (!ctx) throw new Error("useSound must be used within an <AudioProvider>");
	return ctx;
}
