"use client";

import type { ComponentType, SVGProps } from "react";
import {
	BellPayLogo,
	RemitaLogo,
	OmnikaidoLogo,
	ClusteerLogo,
	ArrowRightIcon,
} from "../../components/icons";
import { Button } from "../../components/ui/button";
import Container from "../../components/layout/container";

type Project = {
	title: string;
	description: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
	backgroundImage: string;
};

const projects: Project[] = [
	{
		title: "Clusteer",
		description:
			"Developed an interactive gift card marketplace with secure payments, improving navigation, trust, and overall experience.",
		icon: ClusteerLogo,
		backgroundImage: "/bg-clusteer.png",
	},
	{
		title: "Remita",
		description:
			"Developed an interactive gift card marketplace with secure payments, improving navigation, trust, and overall experience.",
		icon: RemitaLogo,
		backgroundImage: "/bg-remita.jpg",
	},
	{
		title: "Omnikaido",
		description:
			"Developed an interactive gift card marketplace with secure payments, improving navigation, trust, and overall experience.",
		icon: OmnikaidoLogo,
		backgroundImage: "/bg-omnikaido.png",
	},
	{
		title: "BellPay",
		description:
			"Developed an interactive gift card marketplace with secure payments, improving navigation, trust, and overall experience.",
		icon: BellPayLogo,
		backgroundImage: "/bg-bellpay.png",
	},
];

function ProjectPreview({
	title,
	description,
	icon: Icon,
	backgroundImage,
}: Project) {
	return (
		<div className="font-geist group-hover:opacity-25 hover:opacity-100! transition-opacity duration-190 cursor-pointer">
			<div
				className="relative flex items-center justify-center bg-position-[50%_50%] bg-cover h-65 max-w-115.75 rounded-[10px]"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			>
				<Icon
					width={250}
					height={70}
					className="relative z-10"
				/>
			</div>
			<div className="my-6.25">
				<span className="inline-block text-foreground font-semibold -tracking-[0.2px] text-xl">
					{title}
				</span>
				<p className="mt-1.25 text-muted-foreground -tracking-[-0.15px] text-[15px]">
					{description}
				</p>
			</div>
		</div>
	);
}

export default function WorksSection() {
	return (
		<Container className="mt-12.5 flex flex-col">
			<h2 className="text-[32px] font-primary text-foreground -tracking-[0.32px] capitalize">
				Works
			</h2>
			<div className="group grid grid-cols-2 gap-6.25 my-7.5">
				{projects.map((project) => (
					<ProjectPreview
						key={project.title}
						{...project}
					/>
				))}
			</div>
			<Button className="ml-auto">
				View All
				<ArrowRightIcon
					width={15}
					height={23}
					className="fill-foreground"
				/>
			</Button>
			<hr className="my-12.5 border-border border-t" />
		</Container>
	);
}
