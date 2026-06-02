"use client";

import {
	AudioContext,
	SOUNDS,
	type AudioContextValue,
	type ISound,
	type SoundName,
} from "@/context/audio-context";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type AudioMap = Partial<Record<SoundName, HTMLAudioElement>>;
type PlayingMap = Partial<Record<SoundName, boolean>>;

const SOUND_NAMES = Object.keys(SOUNDS) as SoundName[];

export function AudioProvider({ children }: { children: React.ReactNode }) {
	const audiosRef = useRef<AudioMap>({});
	const [playing, setPlaying] = useState<PlayingMap>({});

	useEffect(() => {
		const audios: AudioMap = {};

		for (const name of SOUND_NAMES) {
			const def: ISound = SOUNDS[name];
			const audio = new Audio(def.src);
			audio.loop = def.loop;
			audio.preload = "auto";
			if (def.volume !== undefined) audio.volume = def.volume;
			if (def.playbackRate !== undefined) audio.playbackRate = def.playbackRate;
			audio.onended = () => setPlaying((prev) => ({ ...prev, [name]: false }));
			audios[name] = audio;
		}

		audiosRef.current = audios;

		return () => {
			for (const audio of Object.values(audios)) {
				if (!audio) continue;
				audio.onended = null;
				audio.pause();
				audio.removeAttribute("src");
				audio.load();
			}
			audiosRef.current = {};
		};
	}, []);

	const markPlaying = useCallback((name: SoundName, value: boolean) => {
		setPlaying((prev) =>
			prev[name] === value ? prev : { ...prev, [name]: value },
		);
	}, []);

	const play = useCallback<AudioContextValue["play"]>(
		(name) => {
			const audio = audiosRef.current[name];
			if (!audio) return;
			audio.currentTime = 0;
			void audio.play().catch(() => {});
			markPlaying(name, true);
		},
		[markPlaying],
	);

	const pause = useCallback<AudioContextValue["pause"]>(
		(name) => {
			const audio = audiosRef.current[name];
			if (!audio) return;
			audio.pause();
			markPlaying(name, false);
		},
		[markPlaying],
	);

	const toggle = useCallback<AudioContextValue["toggle"]>(
		(name) => {
			const audio = audiosRef.current[name];
			if (!audio) return;
			if (audio.paused) {
				void audio.play().catch(() => {});
				markPlaying(name, true);
			} else {
				audio.pause();
				markPlaying(name, false);
			}
		},
		[markPlaying],
	);

	const isPlaying = useCallback<AudioContextValue["isPlaying"]>(
		(name) => !!playing[name],
		[playing],
	);

	const value = useMemo<AudioContextValue>(
		() => ({ play, pause, toggle, isPlaying }),
		[play, pause, toggle, isPlaying],
	);

	return (
		<AudioContext.Provider value={value}>{children}</AudioContext.Provider>
	);
}
