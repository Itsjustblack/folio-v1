"use client";

import { cn } from "@/lib/utils";
import { useDeck } from "@/providers/deck-provider";
import HeroSection from "@/sections/home/hero-section";
import WorksSection from "@/sections/home/works-section";

export default function Home() {
	const { isDeckCompleted } = useDeck();
	return (
		<div
			className={cn(
				"pt-52.25 flex flex-col",
				!isDeckCompleted && "overflow-hidden h-[calc(100vh-130px)]",
			)}
		>
			<HeroSection />
			<WorksSection />
			{/* <ArticlesSection /> */}
		</div>
	);
}
