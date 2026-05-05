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
				staggerChildren: POLAROID_ENTRY_STAGGER,
			},
		},
	} as const;

	return (
		<motion.div
			className="relative flex justify-center pt-12.5 mx-auto overflow-x-clip"
			variants={containerVariants}
			initial="hidden"
			animate="rest"
			onAnimationComplete={() => setIsDeckCompleted(true)}
			whileHover="hover"
		>
			<Polaroid
				src="/polaroid.jpg"
				className="relative z-5 sm:w-[236px] w-[200px]"
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
				className="absolute z-4 w-[200px] sm:w-[206px]"
				imageClassName="object-[45%_50%]"
				variants={{
					hidden: { x: 0, y: 0, rotate: 0, opacity: 0 },
					rest: {
						x: 170,
						y: 17,
						rotate: 5.35,
						opacity: 1,
						transition: entrySpring,
					},
					hover: {
						x: 180,
						y: 20,
						rotate: 6.35,
						transition: hoverSpring,
					},
				}}
			/>
			<Polaroid
				src="/polaroid-7.jpg"
				className="absolute z-3 w-[200px] sm:w-[228px]"
				variants={{
					hidden: { y: 0, rotate: 0, opacity: 0 },
					rest: {
						x: -125,
						y: -45,
						rotate: -5.64,
						opacity: 1,
						transition: entrySpring,
					},
					hover: {
						x: -145,
						y: -45,
						rotate: -6.64,
						transition: hoverSpring,
					},
				}}
			/>
			<Polaroid
				src="/polaroid-3.jpg"
				className="absolute z-2 w-[180px] sm:w-[180px]"
				imageClassName="scale-150"
				variants={{
					hidden: { y: 0, rotate: 0, opacity: 0 },
					rest: {
						x: 160,
						y: -106,
						rotate: 11.6,
						opacity: 1,
						transition: entrySpring,
					},
					hover: {
						x: 180,
						y: -126,
						rotate: 10.6,
						transition: hoverSpring,
					},
				}}
			/>
			<Polaroid
				src="/polaroid-4.jpg"
				className="absolute z-1 w-[170px] sm:w-[170px]"
				variants={{
					hidden: { y: 0, rotate: 0, opacity: 0 },
					rest: {
						x: 8,
						y: -123,
						rotate: -4.26,
						opacity: 1,
						transition: entrySpring,
					},
					hover: {
						y: -143,
						transition: hoverSpring,
					},
				}}
			/>
		</motion.div>
	);
}
