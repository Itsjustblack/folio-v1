"use client";

import { blurReveal } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useDeck } from "@/providers/deck-provider";
import { motion } from "motion/react";

export default function Container({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const { isDeckCompleted } = useDeck();
	return (
		<motion.section
			initial="hidden"
			animate={isDeckCompleted ? "visible" : "hidden"}
			variants={blurReveal}
			className={cn(
				"mx-auto px-5 lg:px-0 max-w-4xl w-full prose-headings:italic",
				className,
			)}
			// max-w-237.5
		>
			{children}
		</motion.section>
	);
}

{
	/* <div
				className="w-screen fixed flex z-800 -bottom-2 select-none pointer-events-none"
				style={{
					backdropFilter: "blur(2px)",
					height: 120,
					background: "linear-gradient(transparent, rgb(249, 250, 250))",
					maskImage:
						"linear-gradient(to top, rgb(249, 250, 250) 50%, transparent)",
				}}
			/> */
}
