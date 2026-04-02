"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Container from "../../components/layout/container";
import {
	animate,
	motion,
	useMotionValue,
	type AnimationPlaybackControls,
} from "motion/react";
import { usePlaylist } from "../../hooks/use-playlist";

const FAST_DURATION = 20;
const PLAYLIST_ID = "37i9dQZF1DXcBWIGoYBM5M";

export default function MusicSection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(0);
	const xTranslation = useMotionValue(0);

	const [duration] = useState(FAST_DURATION);
	const controls = useRef<AnimationPlaybackControls>(null!);

	const { data: playlist, isLoading, error } = usePlaylist(PLAYLIST_ID);

	useEffect(() => {
		console.log("Playlist response:", { playlist, isLoading, error });
	}, [playlist, isLoading, error]);

	useEffect(() => {
		const container = containerRef.current;
		if (container) {
			setWidth(container.offsetWidth);
		}

		const finalPosition = -width / 2;

		controls.current = animate(xTranslation, [0, finalPosition], {
			ease: "linear",
			duration: duration,
			repeat: Infinity,
			repeatType: "loop",
			repeatDelay: 0,
		});

		return controls.current.stop;
	}, [duration, width, xTranslation]);

	return (
		<>
			<Container>
				<h2 className="text-[32px] font-normal font-primary text-foreground -tracking-[0.32px]">
					Recommended Tracks
				</h2>
			</Container>
			<motion.div
				ref={containerRef}
				style={{ x: xTranslation, width: "max-content" }}
				className="flex gap-7.5 mt-7.5 w-full overflow-hidden"
			>
				<ul className="flex gap-7.5">
					{Array.from({ length: 5 }, (_, i) => (
						<li
							key={i}
							className="size-75 relative aspect-square flex rounded-[10px] overflow-hidden shrink-0"
						>
							<Image
								fill
								className="object-cover object-top"
								src="/alex.jpg"
								alt="Track 1"
								fetchPriority="high"
							/>
						</li>
					))}
				</ul>
				<ul className="flex gap-7.5">
					{Array.from({ length: 5 }, (_, i) => (
						<li
							key={i}
							className="size-75 relative aspect-square flex rounded-[10px] overflow-hidden shrink-0"
						>
							<Image
								fill
								className="object-cover object-top"
								src="/alex.jpg"
								alt="Track 1"
								fetchPriority="high"
							/>
						</li>
					))}
				</ul>
			</motion.div>
		</>
	);
}
