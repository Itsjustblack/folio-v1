"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../lib/utils";
import ThemeToggle from "./theme-toggle";

const navItems = [
	{ name: "Home", to: "/" },
	{ name: "About", to: "/about" },
	{ name: "Works", to: "/works" },
	{ name: "Writing", to: "/writing" },
	{ name: "Playground", to: "/playground" },
];

function Navitem({ name, to }: { name: string; to: string }) {
	const pathname = usePathname();
	const isActive = pathname === to;

	return (
		<Link
			href={to}
			className={cn(
				"relative flex py-1.5 px-3 rounded-[5px] text-muted-foreground hover:text-foreground tracking-[-0.16px] transition-colors duration-150 ease-out",
				isActive && "text-foreground",
			)}
		>
			<AnimatePresence initial={false}>
				{isActive && (
					<motion.span
						layoutId="active-bg"
						className="absolute inset-0 rounded-[5px] bg-background shadow-[0_2px_4px_0_rgba(0,0,0,0.06)]"
						transition={{ ease: "easeOut", duration: 0.3 }}
					/>
				)}
			</AnimatePresence>
			<span className="relative z-10">{name}</span>
		</Link>
	);
}

export default function NavBar() {
	return (
		<motion.nav
			initial={{ opacity: 0, y: -2, filter: "blur(3px)" }}
			animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
			transition={{ ease: "easeOut", duration: 0.3, delay: 2.4 }}
			className="w-fit bg-surface border-2 relative z-99 border-border h-13.5 py-2.5 gap-5 px-3.75 mx-auto flex items-center rounded-[10px] shadow-[9px_30px_9px_0_rgba(0,0,0,0.00),6px_19px_8px_0_rgba(0,0,0,0.01),3px_11px_7px_0_rgba(0,0,0,0.02),1px_5px_5px_0_rgba(0,0,0,0.03),0_1px_3px_0_rgba(0,0,0,0.04)]"
		>
			{navItems.map(({ name, to }) => (
				<Navitem
					key={to}
					name={name}
					to={to}
				/>
			))}

			<div className="h-full w-[1.5px] shrink-0 bg-border"></div>

			<ThemeToggle />
		</motion.nav>
	);
}
