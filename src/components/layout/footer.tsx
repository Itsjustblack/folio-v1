"use client";

import Container from "./container";

export default function Footer() {
	return (
		<Container className="mb-7.5">
			<hr className="my-12.5 border-border border-t" />
			<footer className="flex justify-between font-geist">
				<span className="inline-block text-muted-foreground text-base -tracking-[0.16px]">
					© 2026
				</span>
				<a
					href="#"
					className="text-muted-foreground hover:text-foreground text-base -tracking-[0.16px] cursor-pointer transition-colors duration-200"
				>
					Designed by Alex Udeogu
				</a>
			</footer>
		</Container>
	);
}
