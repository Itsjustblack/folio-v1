"use client";

import Image from "next/image";
import AnalogClock from "../../components/analog-clock";
import Container from "../../components/layout/container";

export default function InfoSection() {
	return (
		<Container className="grid lg:grid-cols-2 gap-16">
			<div>
				<h1 className="font-primary text-foreground text-3xl text-[32px] sm:text-5xl -tracking-[0.48px]">
					About Me
				</h1>
				<p className="text-[15px] sm:text-lg leading-7.5 -tracking-[0.18px] text-foreground mt-7.5">
					I&apos;m a Full Stack Software Engineer with 4 years of experience
					taking products from 0 → 1. I care about clean architecture, fast
					interfaces, and the messy middle where an idea turns into something
					people can actually use. <br /> <br />
				</p>
				<p className="text-[15px] sm:text-lg leading-7.5 -tracking-[0.18px] text-foreground">
					Outside of work, I play a lot of table tennis, get unreasonably
					invested in hard problems, and like building things I don&apos;t fully
					understand yet — that&apos;s usually where the good stuff lives.
				</p>
			</div>
			{/* <div className="relative flex flex-col items-center justify-center">
				<AnalogClock
					size={150}
					className="absolute z-1 inset-0 -top-25 mx-auto"
				/>
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
			</div> */}
		</Container>
	);
}
