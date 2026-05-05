import type { Variants } from "motion/react";

export const POLAROID_COUNT = 5;
export const POLAROID_CONTAINER_DELAY = 0.5;
export const POLAROID_CONTAINER_DURATION = 0.3;
export const POLAROID_ENTRY_DELAY = 0.5;
export const ENTRY_DELAY = 0.2;
export const POLAROID_ENTRY_STAGGER = 0.06;
export const POLAROID_VISUAL_DURATION = 0.3;

export const blurReveal: Variants = {
	hidden: { opacity: 0, y: 5, filter: "blur(12px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { ease: "easeOut", duration: 0.3, delay: ENTRY_DELAY },
	},
};
