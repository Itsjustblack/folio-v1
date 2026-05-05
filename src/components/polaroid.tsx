"use client";

import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import Image from "next/image";
import { cn } from "../lib/utils";

interface PolaroidProps extends HTMLMotionProps<"div"> {
	src: string;
	imageClassName?: string;
	alt?: string;
}

export default function Polaroid({
	src,
	alt = "",
	className,
	imageClassName,
	style,
	...motionProps
}: PolaroidProps) {
	return (
		<motion.div
			className={cn("overflow-hidden shrink-0 grid", className)}
			style={{
				aspectRatio: 8 / 10,
				backgroundColor: "var(--color-background)",
				padding: "0.9rem 0.9rem 3.5rem",
				transformOrigin: "center",
				filter: "drop-shadow(0 4px 10px oklch(0 0 0 / 0.09))",
				...style,
			}}
			{...motionProps}
		>
			<div className="relative size-full overflow-clip">
				<Image
					src={src}
					alt={alt}
					fill
					loading="eager"
					priority
					className={cn("object-cover object-top scale-110", imageClassName)}
				/>
			</div>
		</motion.div>
	);
}
