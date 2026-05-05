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
			whileTap={{
				scale: 0.96,
				transition: { type: "spring", stiffness: 700, damping: 15 },
			}}
			onClick={handleClick}
			style={{
				rotate,
			}}
			className="size-18.75 flex justify-center focus-visible:ring-2 focus-visible:ring-ring/50 rounded-full items-center fixed bottom-4.25 right-7.5 cursor-pointer border-none bg-transparent z-999"
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
