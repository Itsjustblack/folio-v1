"use client";

import { useSound } from "@/context/audio-context";
import Link from "next/link";

type NavLink = { slug: string; title: string };

export default function NavItem({
	label,
	link,
	align,
}: {
	label: string;
	link: NavLink;
	align: "left" | "right";
}) {
	const { play } = useSound();

	return (
		<Link
			href={`/works/${link.slug}`}
			onClick={() => play("tap")}
			className={`group flex flex-col w-fit ${align === "right" ? "items-end text-right" : ""}`}
		>
			<span className="text-[15px] tracking-[-0.16px] text-black/50 group-hover:text-black/80 transition-colors duration-200 ease-out">
				{label}
			</span>
			<span className="text-lg tracking-[-0.18px] text-black/80 group-hover:text-black transition-colors duration-200 ease-out">
				{link.title}
			</span>
		</Link>
	);
}
