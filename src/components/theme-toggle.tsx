"use client";

import { useRef, useEffect } from "react";
import { animate } from "motion/react";
import { interpolate } from "flubber";
import useTheme from "../hooks/use-theme";

const SUN_CIRCLE = "M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0";
const SUN_RAYS = "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7";
const MOON = "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008";
const DURATION = 0.4;

export default function ThemeToggle() {
	const { theme, toggle } = useTheme();
	const bodyRef = useRef<SVGPathElement>(null);
	const raysRef = useRef<SVGPathElement>(null);
	const initialized = useRef(false);

	useEffect(() => {
		const body = bodyRef.current;
		const rays = raysRef.current;
		if (!body || !rays) return;

		// First render: set state immediately, no animation
		if (!initialized.current) {
			initialized.current = true;
			body.setAttribute("d", theme === "light" ? SUN_CIRCLE : MOON);
			rays.setAttribute("opacity", theme === "light" ? "1" : "0");
			return;
		}

		const toLight = theme === "light";
		const fromPath = toLight ? MOON : SUN_CIRCLE;
		const toPath = toLight ? SUN_CIRCLE : MOON;
		const mix = interpolate(fromPath, toPath, { maxSegmentLength: 0.5 });

		// Morph body shape
		animate(0, 1, {
			duration: DURATION,
			ease: "easeInOut",
			onUpdate: (p) => body.setAttribute("d", mix(p)),
		});

		// Fade rays in/out
		animate(rays, { opacity: toLight ? 1 : 0 }, { duration: DURATION });
	}, [theme]);

	return (
		<button
			onClick={toggle}
			className="flex items-center justify-center p-1.25 hover:bg-background rounded-[5px] text-muted hover:text-foreground transition-colors duration-100 ease-out cursor-pointer"
			aria-label="Toggle theme"
		>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path ref={bodyRef} />
				<path ref={raysRef} d={SUN_RAYS} />
			</svg>
		</button>
	);
}
