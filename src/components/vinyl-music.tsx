"use client";

import { animate } from "motion";
import {
	motion,
	useMotionValue,
	type AnimationPlaybackControls,
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function VinylMusic() {
	const [spinning, setSpinning] = useState(false);
	const animationRef = useRef<AnimationPlaybackControls | null>(null);

	const rotate = useMotionValue(0);

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

	const handleClick = () => setSpinning(!spinning);

	return (
		<motion.button
			initial={{ opacity: 0, filter: "blur(3px)", scale: 0.9 }}
			animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
			transition={{ type: "spring", stiffness: 400, damping: 30, delay: 2.4 }}
			onAnimationComplete={() => setTimeout(() => setSpinning(true), 100)}
			onClick={handleClick}
			style={{
				rotate,
			}}
			className="size-18.75 flex justify-center items-center fixed bottom-4.25 right-7.5 cursor-pointer border-none bg-transparent p-0 z-999"
		>
			<Image
				src="/vinyl.png"
				alt="vinyl record"
				fill
				sizes="75px"
				className="object-cover"
			/>
		</motion.button>
	);
}
