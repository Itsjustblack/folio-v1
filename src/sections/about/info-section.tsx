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
			<div className="relative flex flex-col items-center justify-center mt-12.5 lg:mt-0">
				<AnalogClock
					size={150}
					className="absolute z-1 inset-0 -top-25 mx-auto"
				/>
				<div className="relative w-100 h-150">
					<div className="w-full h-full relative z-5">
						<div className="absolute grid grid-cols-2 items-end -top-24 w-full h-fit">
							<div className="relative -left-9.25 w-60.5 z-2 aspect-square">
								<Image
									src="/flowers.png"
									alt="a shelf"
									loading="eager"
									fill
									className="object-cover"
								/>
							</div>
							<div className="relative flex w-40.75 h-22.75 -top-2.25">
								<Image
									src="/books.png"
									alt="a shelf"
									loading="eager"
									fill
									className="object-cover"
								/>
							</div>
						</div>
						<div className="absolute flex items-end gap-x-[71px] top-[158px] w-full h-fit">
							<div className="relative bottom-[6px] flex gap-4.5 items-end ml-20">
								<Image
									src="/small-lamp.png"
									alt="a shelf"
									loading="eager"
									width={59}
									height={90}
									className="object-cover"
								/>
								<Image
									src="/clock.png"
									alt="a shelf"
									loading="eager"
									width={37}
									height={50}
									className="object-cover"
								/>
							</div>
							<Image
								src="/flowers-2.png"
								alt="a shelf"
								loading="eager"
								width={86}
								height={120}
								className="object-cover"
							/>
						</div>
						<div className="absolute bottom-[59px] flex gap-[93px] items-end ml-[55px] w-full h-fit">
							<Image
								src="/helmet.png"
								alt="a shelf"
								width={106}
								height={86}
								className="object-cover"
							/>
							<Image
								src="/radio.png"
								alt="a shelf"
								loading="eager"
								width={99}
								height={62}
								className="object-cover"
							/>
						</div>
						<div className="absolute bottom-[193px] flex items-end ml-[35px] w-full h-fit">
							<Image
								src="/sculpture.png"
								alt="a shelf"
								width={60}
								height={97}
								className="object-cover"
							/>
							<Image
								src="/books-2.png"
								alt="a shelf"
								loading="eager"
								width={76}
								height={60}
								className="object-cover ml-[46px] mr-[30px]"
							/>
							<Image
								src="/record-player.png"
								alt="a shelf"
								loading="eager"
								width={106}
								height={71}
								className="object-cover"
							/>
						</div>
					</div>
					<div className="absolute bottom-0 -right-22 w-39.5 h-83">
						<Image
							src="/flowers-3.png"
							alt="a shelf"
							loading="eager"
							fill
							className="object-cover"
						/>
					</div>
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
