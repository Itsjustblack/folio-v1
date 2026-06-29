"use client";

import { useSound } from "@/context/audio-context";
import Link from "next/link";
import type { ReactNode } from "react";

interface SocialLinkProps {
	text: string;
	icon: ReactNode;
	href: string;
}

export default function SocialLink({ text, icon, href }: SocialLinkProps) {
	const { play } = useSound();
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="bg-secondary relative isolate rounded-[5px] px-3.75 py-2.5 flex text-foreground items-center gap-x-2.5 font-geist tracking-[-0.18px] capitalize whitespace-nowrap outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/50 before:absolute before:inset-0 before:-z-10 before:rounded-[5px] before:bg-black/6 before:opacity-0 before:transition-opacity before:duration-200 before:ease-in-out hover:before:opacity-100 active:scale-96 transition-transform"
			onClick={() => play("tap")}
		>
			{icon}
			{text}
		</Link>
	);
}
