"use client";
import { motion } from "motion/react";
import useTheme from "../hooks/use-theme";
import { MoonIcon, SunIcon } from "./icons";

const transition = {
	duration: 0.4,
	ease: "easeInOut",
} as const;

export default function ThemeToggle() {
	const { theme, toggle } = useTheme();

	const isLight = theme === "light";

	return (
		<motion.button
			onClick={toggle}
			// initial={{ filter: "blur(12px)" }}
			// animate={{ filter: "blur(0px)" }}
			// transition={transition}
			className="flex items-center justify-center p-1.25 keyboard active text-muted hover:text-foreground transition-colors duration-100 ease-out cursor-pointer"
			aria-label="Toggle theme"
		>
			{isLight ? <SunIcon color="black" /> : <MoonIcon fill="white" />}
		</motion.button>
	);
}
