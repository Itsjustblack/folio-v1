"use client";

import { motion, type Transition } from "motion/react";
import Polaroid from "./polaroid";

const containerVariants = {
	hidden: {},
	rest: {
		transition: {
			staggerChildren: 0.06,
		},
	},
};

const entrySpring: Transition = {
	type: "spring",
	visualDuration: 0.3,
	bounce: 0.35,
	delay: 1.5,
};

const hoverSpring: Transition = {
	type: "spring",
	stiffness: 300,
	damping: 24,
	mass: 1,
};

const dropShadow = "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.09))";

export default function PolaroidDeck() {
	return (
		<motion.div
			className="relative flex justify-center pt-32.5"
			variants={containerVariants}
			initial="hidden"
			animate="rest"
			// whileHover="hover"
		>
			<Polaroid
				src="/alex.jpg"
				className="relative z-5"
				style={{ width: "236px", filter: dropShadow }}
				variants={{
					hidden: {
						y: 0,
						rotate: 0,
						opacity: 0,
						scale: 0.9,
						// filter: "blur(3px)",
					},
					rest: {
						y: 0,
						rotate: -1.5,
						opacity: 1,
						scale: 1,
						// filter: `blur(0px) ${dropShadow}`,
						transition: {
							opacity: { ease: "easeOut", delay: 0.5 },
							filter: { ease: "easeOut", delay: 0.5 },
							rotate: entrySpring,
						},
					},
					hover: {
						y: -4,
						rotate: -2.5,
						filter: `blur(0px) ${dropShadow}`,
						transition: hoverSpring,
					},
				}}
			/>
			<Polaroid
				src="/alex-2.jpg"
				className="absolute z-4"
				style={{ width: "206px" }}
				variants={{
					hidden: { y: 0, rotate: 0, opacity: 0 },
					rest: {
						x: 170,
						y: 17,
						rotate: 5.35,
						opacity: 1,
						filter: dropShadow,
						transition: entrySpring,
					},
					hover: {
						y: -21.5,
						rotate: 4.35,
						filter: dropShadow,
						transition: hoverSpring,
					},
				}}
			/>
			<Polaroid
				src="/alex-3.jpg"
				className="absolute z-3 scale-x-[-1]"
				style={{ width: "228px" }}
				variants={{
					hidden: { y: 0, rotate: 0, opacity: 0 },
					rest: {
						x: 113,
						y: -58,
						rotate: 5.64,
						opacity: 1,
						filter: dropShadow,
						transition: entrySpring,
					},
					hover: {
						y: -62,
						rotate: 4.64,
						filter: dropShadow,
						transition: hoverSpring,
					},
				}}
			/>
			<Polaroid
				src="/alex-4.jpg"
				className="absolute z-2"
				style={{ width: "180px" }}
				variants={{
					hidden: { y: 0, rotate: 0, opacity: 0 },
					rest: {
						x: 160,
						y: -106,
						rotate: 11.6,
						opacity: 1,
						filter: dropShadow,
						transition: entrySpring,
					},
					hover: {
						y: -191,
						rotate: 10.6,
						filter: dropShadow,
						transition: hoverSpring,
					},
				}}
			/>
			<Polaroid
				src="/alex-5.jpg"
				className="absolute z-1"
				style={{ width: "170px" }}
				variants={{
					hidden: { y: 0, rotate: 0, opacity: 0 },
					rest: {
						x: 8,
						y: -123,
						rotate: -4.26,
						opacity: 1,
						filter: dropShadow,
						transition: entrySpring,
					},
					hover: {
						y: -224,
						rotate: -5.26,
						filter: dropShadow,
						transition: hoverSpring,
					},
				}}
			/>
		</motion.div>
	);
}
