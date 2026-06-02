"use client";

import ProjectList from "@/components/project-list";
import type { ComponentType, SVGProps } from "react";
import {
	ArrowRightIcon,
	BellPayLogo,
	ClusteerLogo,
	OmnikaidoLogo,
	RemitaLogo,
} from "../../components/icons";
import Container from "../../components/layout/container";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export type Project = {
	slug: string;
	title: string;
	description: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
	backgroundImage: string;
};

const projects: Project[] = [
	{
		slug: "clusteer",
		title: "Clusteer",
		description:
			"A P2P crypto-to-fiat exchange for trading USDT to Naira, with multi-wallet support and escrow protection.",
		icon: ClusteerLogo,
		backgroundImage: "/bg-clusteer.png",
	},
	{
		slug: "remita",
		title: "Remita",
		description:
			"Nigeria's flagship payment platform for transfers, bills, and finances across every bank in one place.",
		icon: RemitaLogo,
		backgroundImage: "/remita.jpg",
	},
	{
		slug: "omnikado",
		title: "Omnikado",
		description:
			"A gift card marketplace with hundreds of global brands and a smooth, checkout flow powered by Paystack.",
		icon: OmnikaidoLogo,
		backgroundImage: "/bg-omnikaido.png",
	},
	{
		slug: "bellpay",
		title: "BellPay",
		description:
			"A marketing site for a payment solutions company, built with designers and tuned for speed and traffic growth.",
		icon: BellPayLogo,
		backgroundImage: "/bg-bellpay.png",
	},
];

export default function WorksSection() {
	return (
		<Container className="mt-12.5 flex flex-col">
			<h2 className="text-[32px] font-primary text-foreground -tracking-[0.32px] capitalize">
				Works
			</h2>
			<div className="my-7.5">
				<ProjectList projects={projects} />
			</div>
			<Link
				href="/works"
				className="ml-auto flex text-muted-foreground hover:text-foreground font-geist text-sm font-medium uppercase"
			>
				<Button className="">
					View All
					<ArrowRightIcon
						width={15}
						height={23}
						className="fill-foreground"
					/>
				</Button>
			</Link>
			{/* <Divider /> */}
		</Container>
	);
}
