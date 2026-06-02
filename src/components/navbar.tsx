"use client";

import { ENTRY_DELAY } from "@/lib/constants";
import { useDeck } from "@/providers/deck-provider";
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { cn } from "../lib/utils";
import ThemeToggle from "./theme-toggle";
import { useSound } from "@/context/audio-context";

const navbarVariants = {
	hidden: { opacity: 0, scale: 0.96, filter: "blur(12px)" },
	visible: {
		opacity: 1,
		scale: 1,
		filter: "blur(0px)",
		transition: { ease: "easeOut", duration: 0.3, delay: ENTRY_DELAY },
	},
} as const;

const TOP_THRESHOLD = 50;
const DELTA_THRESHOLD = 15;

const navItems = [
	{ name: "Home", to: "/" },
	{ name: "About", to: "/about" },
	{ name: "Works", to: "/works" },
	// { name: "Writing", to: "/writing" },
	// { name: "Playground", to: "/playground" },
];

function Navitem({ name, to }: { name: string; to: string }) {
	const pathname = usePathname();
	const { play } = useSound();
	const isActive =
		to === "/"
			? pathname === to
			: pathname === to || pathname.startsWith(`${to}/`);

	return (
		<Link
			href={to}
			className={cn(
				"relative px-3 h-8.25 flex text-sm items-center keyboard",
				isActive && "active",
			)}
			onClick={() => play("tap")}
		>
			{name}
		</Link>
	);
}

export default function NavBar() {
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();
	const { isDeckCompleted } = useDeck();

	const anchorYRef = useRef(0);

	useMotionValueEvent(scrollY, "change", (y) => {
		if (y <= TOP_THRESHOLD) {
			setHidden(false);
			anchorYRef.current = y;
			return;
		}

		const delta = y - anchorYRef.current;
		if (Math.abs(delta) < DELTA_THRESHOLD) return;

		setHidden(delta > 0);
		anchorYRef.current = y;
	});

	return (
		<AnimatePresence>
			{!hidden && (
				<motion.nav
					initial="hidden"
					animate={isDeckCompleted ? "visible" : "hidden"}
					// variants={blurReveal}
					variants={navbarVariants}
					exit="hidden"
					className="fixed top-8 left-1/2 -translate-x-1/2 z-30"
				>
					<div
						// style={{
						// 	boxShadow: `9px 30px 9px 0 rgba(0, 0, 0, 0.00), 6px 19px 8px 0
						// rgba(0, 0, 0, 0.01), 3px 11px 7px 0 rgba(0, 0, 0, 0.02), 1px 5px 5px
						// 0 rgba(0, 0, 0, 0.03), 0 1px 3px 0 rgba(0, 0, 0, 0.04)`,
						// }}
						className="perspective-normal px-3.75 h-13.5 flex items-center gap-x-3 md:gap-x-5 border-2 rounded-[10px] border-border shadow-[0_2px_0_0] shadow-border bg-[#F4F4F4] dark:bg-background"
					>
						{navItems.map(({ name, to }) => (
							<Navitem
								key={to}
								name={name}
								to={to}
							/>
						))}
						{/* <div className="relative p-1 size-8.25 shrink-0 keyboard active overflow-hidden">
							<div className="relative rounded-[5px] size-full overflow-clip">
								<Image
									src="/jason.jpg"
									alt="my picture"
									fill
									loading="eager"
									priority
									className="object-cover object-[0%_23%] pointer-events-none"
								/>
							</div>
						</div> */}
						{/* <ThemeToggle /> */}
					</div>
				</motion.nav>
			)}
		</AnimatePresence>
	);
}
