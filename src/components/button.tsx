"use client";

import type { ReactNode } from "react";
import { cn } from "../lib/utils";

interface ButtonProps {
	text: string;
	className?: string;
	icon?: ReactNode;
}

export default function Button({ text, className = "", icon }: ButtonProps) {
	return (
		<button
			className={cn(
				"bg-surface hover:bg-black/5 font-normal text-foreground rounded-[5px] px-3.75 py-2.5 text-base flex items-center gap-x-2.5 font-geist tracking-[-0.18px] capitalize cursor-pointer group/button shrink-0 justify-center whitespace-nowrap outline-none select-none focus-visible:ring-1 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
		>
			{text}
			{icon}
		</button>
	);
}
