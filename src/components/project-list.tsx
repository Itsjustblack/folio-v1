"use client";

import { useSound } from "@/context/audio-context";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

export interface ProjectPreviewProps {
	title: string;
	slug: string;
	description: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
	backgroundImage: string;
}

function ProjectPreview({
	title,
	slug,
	description,
	icon: Icon,
	backgroundImage,
}: ProjectPreviewProps) {
	const { play } = useSound();

	return (
		<Link
			href={`/works/${slug}`}
			onClick={() => play("tap")}
			className="font-geist group-hover:opacity-25 hover:opacity-100! transition-opacity duration-300 ease-in-out flex flex-col-reverse md:flex-col"
		>
			<div className="relative flex aspect-[1.77] w-full items-center justify-center rounded-[10px] overflow-clip group-hover:shadow-sm">
				<Image
					src={backgroundImage}
					alt={title}
					fill
					loading="eager"
					priority
					className="object-cover object-[0%_23%] pointer-events-none"
				/>
				<div className="absolute inset-0 flex items-center justify-center">
					<Icon className="relative z-10 sm:w-62.5 sm:h-17.5 w-50 h-12" />
				</div>
			</div>
			<div className="my-5">
				<span className="inline-block text-foreground group-hover:text-black font-medium -tracking-[0.2px] text-lg sm:text-xl">
					{title}
				</span>
				<p className="mt-1.25 text-muted-foreground -tracking-[-0.15px] group-hover:text-black/80 text-[13px] sm:text-[15px]">
					{description}
				</p>
			</div>
		</Link>
	);
}

interface ProjectListProps {
	projects: ProjectPreviewProps[];
}

export default function ProjectList({ projects }: ProjectListProps) {
	return (
		<div className="group grid md:grid-cols-2 gap-6.25">
			{projects.map((project) => (
				<ProjectPreview
					key={project.title}
					{...project}
				/>
			))}
		</div>
	);
}
