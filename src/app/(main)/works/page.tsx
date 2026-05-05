import {
	BellPayLogo,
	ClusteerLogo,
	OmnikaidoLogo,
	RemitaLogo,
} from "@/components/icons";
import Container from "@/components/layout/container";
import ProjectList from "@/components/project-list";
import { Project } from "@/sections/home/works-section";
import IntroSection from "@/sections/work/intro-section";

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
		slug: "omnikaido",
		title: "Omnikaido",
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
export default function Works() {
	return (
		<div className="pt-52.25">
			<IntroSection />
			<Container className="mt-12.5">
				<ProjectList projects={projects} />
			</Container>
		</div>
	);
}
