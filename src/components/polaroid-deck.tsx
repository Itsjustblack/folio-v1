"use client";

import {
	ENTRY_DELAY,
	POLAROID_CONTAINER_DURATION,
	POLAROID_ENTRY_DELAY,
	POLAROID_ENTRY_STAGGER,
	POLAROID_VISUAL_DURATION,
} from "@/lib/constants";
import { useDeck } from "@/providers/deck-provider";
import { motion, type Transition } from "motion/react";
import Polaroid from "./polaroid";
import { cn } from "@/lib/utils";

const entrySpring: Transition = {
	type: "spring",
	visualDuration: POLAROID_VISUAL_DURATION,
	bounce: 0.35,
};

const hoverSpring: Transition = {
	type: "spring",
	stiffness: 300,
	damping: 24,
	mass: 1,
};

export default function PolaroidDeck() {
	const { setIsDeckCompleted, isDeckCompleted } = useDeck();

	const containerVariants = {
		hidden: { y: 8, opacity: 0, filter: "blur(12px)" },
		rest: {
			y: 0,
			opacity: 1,
			filter: "blur(0px)",
			transition: {
				when: "beforeChildren",
				ease: "easeOut",
				duration: POLAROID_CONTAINER_DURATION,
				delay: isDeckCompleted ? ENTRY_DELAY : POLAROID_ENTRY_DELAY,
				// delayChildren: POLAROID_ENTRY_DELAY,
				// staggerChildren: POLAROID_ENTRY_STAGGER,
				staggerChildren: POLAROID_ENTRY_STAGGER,
			},
		},
		hover: {
			staggerChildren: 0,
		},
	} as const;

	return (
		<motion.div
			className={cn(
				"relative flex justify-center pt-12.5 mx-auto overflow-x-clip",
				!isDeckCompleted && "pointer-events-none",
			)}
			variants={containerVariants}
			initial="hidden"
			animate="rest"
			onAnimationComplete={() => setIsDeckCompleted(true)}
			whileHover="hover"
		>
			<Polaroid
				src="/polaroid.jpg"
				className="relative z-5 w-[210px] sm:w-[236px]"
				variants={{
					hidden: {
						y: 0,
						rotate: 0,
					},
					rest: {
						y: 0,
						rotate: -1.5,
						transition: {
							opacity: { ease: "easeOut" },
							filter: { ease: "easeOut" },
							rotate: entrySpring,
						},
					},
				}}
			/>
			<Polaroid
				src="/polaroid-5.jpg"
				className="absolute z-4 w-[210px] sm:w-[236px] scale-[0.98]"
				imageClassName="object-[45%_50%]"
				variants={{
					hidden: { x: 0, y: 0, rotate: 0, opacity: 0 },
					rest: {
						x: 150,
						y: -17,
						rotate: 5.35,
						opacity: 1,
						transition: entrySpring,
					},
					hover: {
						x: 180,
						y: -25,
						rotate: 6.35,
						transition: hoverSpring,
					},
				}}
			/>
			<Polaroid
				src="/polaroid-7.jpg"
				className="absolute z-3 w-[210px] sm:w-[236px] scale-[0.98]"
				variants={{
					hidden: { y: 0, rotate: 0, opacity: 0 },
					rest: {
						x: -150,
						y: -17,
						rotate: -5.35,
						opacity: 1,
						transition: entrySpring,
					},
					hover: {
						x: -180,
						y: -25,
						rotate: -6.35,
						transition: hoverSpring,
					},
				}}
			/>
			<Polaroid
				src="/polaroid-4.jpg"
				className="absolute z-1 w-[210px] sm:w-[236px] scale-[0.9]"
				variants={{
					hidden: { y: 0, rotate: 0, opacity: 0 },
					rest: {
						x: -100,
						y: -153,
						rotate: -4.35,
						opacity: 1,
						transition: entrySpring,
					},
					hover: {
						x: -110,
						y: -193,
						rotate: -6.35,
						transition: hoverSpring,
					},
				}}
			/>
			<Polaroid
				src="/polaroid-3.jpg"
				className="absolute z-2 w-[210px] sm:w-[236px] scale-[0.9]"
				imageClassName="scale-150"
				variants={{
					hidden: { y: 0, rotate: 0, opacity: 0 },
					rest: {
						x: 100,
						y: -153,
						rotate: 4.35,
						opacity: 1,
						transition: entrySpring,
					},
					hover: {
						x: 110,
						y: -193,
						rotate: 6.35,
						transition: hoverSpring,
					},
				}}
			/>
		</motion.div>
	);
}
