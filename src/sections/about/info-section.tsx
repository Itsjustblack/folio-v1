"use client";

import Image from "next/image";
import AnalogClock from "../../components/analog-clock";
import Container from "../../components/layout/container";

export default function InfoSection() {
	return (
		<Container className="mt-30 grid grid-cols-2 gap-16">
			<div>
				<h1 className="font-primary text-foreground text-5xl -tracking-[0.48px]">
					About Me
				</h1>
				<p className="text-lg leading-7.5 -tracking-[0.18px] text-muted-foreground mt-7.5">
					I’ve been working professionally in product design for six years,
					focusing on 0→1 product development, complex financial flows, and
					highly interactive interfaces. <br /> <br />
				</p>
				<p className="text-lg leading-7.5 -tracking-[0.18px] text-muted-foreground">
					My approach is rooted in understanding user behavior, aligning design
					decisions with business goals, and crafting digital products that are
					visually strong, intuitive, and scalable.
				</p>
			</div>
			<div className="relative flex flex-col items-center justify-center">
				<AnalogClock className="absolute z-1 inset-0 -top-25 mx-auto" />
				<div className="relative w-100 h-150">
					<Image
						src="/shelf.png"
						alt="a shelf"
						fill
						loading="eager"
						sizes="400px"
						className="object-cover z-2"
					/>
				</div>
			</div>
		</Container>
	);
}
