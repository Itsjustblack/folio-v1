"use client";

import type { ReactNode } from "react";

interface SocialLinkProps {
	text: string;
	icon: ReactNode;
	href?: string;
}

export default function SocialLink({ text, icon, href }: SocialLinkProps) {
	return (
		<a
			href={href}
			className="bg-surface rounded-[5px] px-3.75 py-2.5 flex items-center gap-x-2.5 font-geist tracking-[-0.18px] capitalize whitespace-nowrap outline-none select-none focus-visible:ring-1 focus-visible:ring-ring/50"
		>
			{icon}
			{text}
		</a>
	);
}
