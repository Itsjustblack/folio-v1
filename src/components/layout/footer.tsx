"use client";

import Container from "./container";
import Divider from "../divider";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
	const pathname = usePathname();
	const isHiddenRoute = /^\/(works|playground)\/[^/]+/.test(pathname);

	if (isHiddenRoute) return null;

	return (
		<Container className="mb-7.5">
			<Divider />
			<footer className="flex justify-between font-geist">
				<span className="inline-block text-muted text-base -tracking-[0.16px]">
					© 2026
				</span>
				<Link
					href="#"
					target="_blank"
					rel="noopener noreferrer"
					className="text-muted hover:text-foreground text-base -tracking-[0.16px] cursor-pointer transition-colors duration-200"
				>
					Designed by Alex Udeogu
				</Link>
			</footer>
		</Container>
	);
}
