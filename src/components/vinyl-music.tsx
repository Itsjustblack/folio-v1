"use client";

import { animate } from "motion";
import {
	motion,
	useMotionValue,
	type AnimationPlaybackControls,
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSound } from "@/context/audio-context";
import { useDeck } from "@/providers/deck-provider";
import { blurReveal } from "@/lib/constants";

export default function VinylMusic() {
	const { toggle, play, isPlaying } = useSound();
	const spinning = isPlaying("vinyl");
	const animationRef = useRef<AnimationPlaybackControls | null>(null);
	const rotate = useMotionValue(0);

	const { isDeckCompleted } = useDeck();

	useEffect(() => {
		if (spinning) {
			animationRef.current = animate(rotate, rotate.get() + 360, {
				duration: 3,
				repeat: Infinity,
				ease: "linear",
			});
		} else {
			animationRef.current?.stop();
		}

		return () => animationRef.current?.stop();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [spinning]);

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<div
					onClick={() => play("tap")}
					className="fixed bottom-4.25 right-7.5 z-999 cursor-pointer"
				>
					<motion.button
						initial="hidden"
						animate={isDeckCompleted ? "visible" : "hidden"}
						variants={blurReveal}
						// initial={{ opacity: 0, filter: "blur(3px)", scale: 0.9 }}
						// animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
						whileTap={{
							scale: 0.96,
							transition: { type: "spring", stiffness: 700, damping: 15 },
						}}
						onClick={() => toggle("vinyl")}
						style={{
							rotate,
						}}
						className="size-18.75 flex justify-center focus-visible:ring-2 focus-visible:ring-ring/50 rounded-full items-center border-none bg-transparent"
					>
						<Image
							src="/vinyl.png"
							alt="vinyl record"
							fill
							sizes="75px"
							className="object-cover"
						/>
					</motion.button>
				</div>
			</TooltipTrigger>
			<TooltipContent>
				<p>{isPlaying("vinyl") ? "Pause" : "Play"} music</p>
			</TooltipContent>
		</Tooltip>
	);
}
