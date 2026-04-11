import Container from "@/components/layout/container";
import Image from "next/image";

export default function IntroSection() {
	return (
		<Container className="mt-30 grid items-center grid-cols-2 gap-16">
			<div>
				<h1 className="font-primary text-foreground text-5xl -tracking-[0.48px]">
					Thoughts
				</h1>
				<p className="text-lg leading-7.5 -tracking-[0.18px] text-muted-foreground mt-7.5">
					I’ve been working professionally in product design for six years,
					focusing on 0→1 product development, complex financial flows, and
					highly interactive interfaces.
				</p>
			</div>
			<div className="relative flex flex-col items-center justify-center">
				<Image
					width={300}
					height={557}
					src="/book-shelf.png"
					alt="a shelf"
					priority
					sizes="400px"
					className="object-cover z-2 object-top"
				/>
			</div>
		</Container>
	);
}
