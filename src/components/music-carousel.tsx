"use client";

import type { SpotifyImage } from "@/lib/api/types";
import {
	animate,
	motion,
	useInView,
	useMotionTemplate,
	useMotionValue,
	useTransform,
} from "motion/react";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

const FAST_DURATION = 30;
const MotionImage = motion.create(Image);

function Track({ src }: { src: string }) {
	const trackRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(trackRef, { margin: "0px -25% 0px -25%" });

	const controls = useRef<ReturnType<typeof animate> | null>(null);
	const parallax = useMotionValue(50);

	const parallaxPercent = useTransform(parallax, [50, 100], [-5, 5]);
	const x = useMotionTemplate`${parallaxPercent}%`;

	useLayoutEffect(() => {
		controls.current = animate(parallax, 100, {
			ease: "easeInOut",
			duration: 20,
			repeat: Infinity,
			repeatType: "mirror",
		});

		return () => controls.current?.stop();
	}, [parallax]);

	return (
		<div
			ref={trackRef}
			className="relative w-[calc(25vw-30px)] aspect-square rounded-[10px] overflow-hidden shrink-0"
		>
			<MotionImage
				fill
				sizes="25vw"
				alt=""
				// style={{ x }}
				transition={{
					ease: "linear",
					duration: FAST_DURATION,
				}}
				src={src}
				className="object-cover aspect-square"
				fetchPriority="high"
			/>
		</div>
	);
}

interface MusicCarouselProps {
	tracks: SpotifyImage[];
}

export default function MusicCarousel({ tracks }: MusicCarouselProps) {
	return (
		<div className="mt-7.5 w-screen overflow-hidden flex">
			<motion.div
				initial={{ x: "0%" }}
				animate={{ x: "-100%" }}
				transition={{
					ease: "linear",
					duration: FAST_DURATION,
					repeat: Infinity,
					repeatType: "loop",
					repeatDelay: 0,
				}}
				className="w-max flex gap-7.5 pl-7.5"
			>
				{tracks.map((item, i) => (
					<Track
						key={i}
						src={item.url}
					/>
				))}
			</motion.div>
			<motion.div
				initial={{ x: "0%" }}
				animate={{ x: "-100%" }}
				transition={{
					ease: "linear",
					duration: FAST_DURATION,
					repeat: Infinity,
					repeatType: "loop",
					repeatDelay: 0,
				}}
				className="w-max flex gap-7.5 pl-7.5"
			>
				{tracks.map((item, i) => (
					<Track
						key={i}
						src={item.url}
					/>
				))}
			</motion.div>
		</div>
	);
}
