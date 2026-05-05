import Container from "@/components/layout/container";
import Image from "next/image";

export default function IntroSection() {
	return (
		<Container className="grid items-start grid-cols-2 gap-16">
			<div>
				<h1 className="font-primary text-foreground text-5xl -tracking-[0.48px]">
					Works
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
			<div className="relative w-full flex flex-col items-start justify-end h-150">
				<div className="flex gap-5 w-full translate-y-5 relative z-3">
					<Image
						width={200}
						height={75}
						src="/sleeping-cat.png"
						alt="a sleeping cat"
						priority
						className=""
					/>
					<Image
						width={132}
						height={96}
						src="/mac-m4-pro.png"
						alt="mac book m4 pro"
						priority
						sizes="400px"
						className="object-cover"
					/>
				</div>
				<div className="absolute w-46.75 h-full right-0 -bottom-5">
					<Image
						fill
						src="/floor-lamp.png"
						alt="a floor lamp"
						priority
						sizes="400px"
						className="relative object-cover z-3 object-top"
					/>
				</div>
				<Image
					width={434}
					height={250}
					src="/wooden-table.png"
					alt="a wooden table"
					priority
					sizes="400px"
					className="relative object-cover z-2 object-top w-full"
				/>
			</div>
		</Container>
	);
}
