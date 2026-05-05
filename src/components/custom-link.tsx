"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, type ComponentProps, type ReactNode } from "react";

interface CustomLinkProps extends Omit<
	ComponentProps<typeof Link>,
	"children"
> {
	children: ReactNode;
	imageSrc: string;
	imageAlt?: string;
	title: string;
	description: string;
	logoSrc: string;
	logoAlt?: string;
}

export default function CustomLink({
	children,
	imageSrc,
	imageAlt = "",
	title,
	description,
	logoSrc,
	logoAlt = "",
	className,
	...linkProps
}: CustomLinkProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<span
			className="relative inline-block"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Link
				{...linkProps}
				className={cn(
					"font-geist text-lg font-normal leading-7.5 text-[oklch(0.488_0.243_264.376)] underline decoration-solid decoration-auto underline-offset-auto [text-underline-position:from-font]",
					className,
				)}
			>
				{children}
			</Link>
			<AnimatePresence>
				{isHovered && (
					<motion.div
						role="tooltip"
						initial={{ opacity: 0, filter: "blur(3px)", y: 10, scale: 0.95 }}
						animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
						exit={{ opacity: 0, filter: "blur(3px)", y: 10, scale: 0.95 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
						style={{ x: "-50%" }}
						className=" absolute bottom-full left-1/2 z-50 mb-2 w-70 origin-center"
					>
						<div className="grid h-76.75 grid-rows-[1fr_auto] overflow-hidden rounded-[10px] bg-card font-geist shadow-[-16px_103px_42px_0_oklch(0_0_0/0.01),-1px_6px_14px_0_oklch(0_0_0/0.06)]">
							<div className="relative block h-full">
								<Image
									fill
									src={imageSrc}
									alt={imageAlt}
									sizes="280px"
									className="object-cover object-top"
								/>
							</div>
							<span className="flex h-fit flex-col gap-2.5 p-3.75">
								<span className="block space-y-1.25">
									<span className="block font-geist text-base font-medium tracking-[-0.15px] text-foreground">
										{title}
									</span>
									<span className="block font-geist text-sm font-normal leading-normal tracking-[-0.12px] text-muted-foreground">
										{description}
									</span>
								</span>
								<Image
									src={logoSrc}
									alt={logoAlt}
									width={38}
									height={8}
								/>
							</span>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</span>
	);
}
