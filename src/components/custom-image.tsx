"use client";

import { cn } from "@/lib/utils";
import { useModal } from "@/providers/modal-provider";
import { motion } from "motion/react";
import Image from "next/image";

interface CustomImageProps {
	src: string;
	alt?: string;
	className?: string;
	imageClassName?: string;
}

export default function CustomImage({
	src,
	alt = "Image",
	className,
	imageClassName,
}: CustomImageProps) {
	const { openModal } = useModal();
	const layoutId = `image-modal-${src}`;

	return (
		<div className="flex flex-col items-center gap-y-3.75">
			<motion.div
				// layout
				layoutId={layoutId}
				onClick={() => openModal({ src, alt, layoutId })}
				className={cn(
					"relative flex aspect-[1.675] w-full items-center justify-center rounded-[10px] border-2 border-white/20 bg-primary-foreground overflow-clip cursor-zoom-in z-50",
					className,
				)}
			>
				<Image
					src={src}
					alt={alt}
					fill
					priority
					className={cn("object-cover")}
				/>
			</motion.div>
			<span className="text-[15px] text-center text-muted w-fit tracking-[-0.15px]">
				{alt}
			</span>
		</div>
	);
}
