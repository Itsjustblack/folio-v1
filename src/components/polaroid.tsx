"use client";

import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import Image from "next/image";
import { cn } from "../lib/utils";

interface PolaroidProps extends HTMLMotionProps<"div"> {
	src: string;
	alt?: string;
}

export default function Polaroid({
	src,
	alt = "",
	className,
	style,
	...motionProps
}: PolaroidProps) {
	return (
		<motion.div
			className={cn("overflow-hidden shrink-0 flex flex-col", className)}
			style={{
				aspectRatio: 8 / 10,
				backgroundColor: "var(--color-background)",
				padding: "1rem 1rem 3.5rem 1rem",
				transformOrigin: "center",
				...style,
			}}
			{...motionProps}
		>
			<div className="relative w-full aspect-square">
				<Image
					src={src}
					alt={alt}
					fill
					loading="eager"
					priority
					className="object-cover object-top"
				/>
			</div>
		</motion.div>
	);
}
