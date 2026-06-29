"use client";

import Container from "@/components/layout/container";
import SocialLink from "@/components/social-link";
import {
	CalendlyIcon,
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
} from "../../components/icons";
import PolaroidDeck from "../../components/polaroid-deck";

const socialLinks = [
	{
		text: "twitter",
		href: "https://x.com/jace_oa",
		icon: (
			<TwitterIcon
				width={20}
				height={20}
			/>
		),
	},
	{
		text: "linkedin",
		href: "https://www.linkedin.com/in/jason-aghedo/",
		icon: (
			<LinkedinIcon
				width={20}
				height={20}
			/>
		),
	},
	{
		text: "github",
		href: "https://github.com/Itsjustblack",
		icon: (
			<GithubIcon
				width={20}
				height={20}
			/>
		),
	},
	{
		text: "instagram",
		href: "https://www.instagram.com/jace.ao",
		icon: (
			<InstagramIcon
				width={20}
				height={20}
			/>
		),
	},
	{
		text: "calendly",
		href: "https://calendly.com/jason-aghedo/intro-call-with-jason-aghedo",
		icon: (
			<CalendlyIcon
				width={20}
				height={20}
			/>
		),
	},
];

export default function HeroSection() {
	return (
		<div className="max-w-170.5 w-full mx-auto">
			<PolaroidDeck />

			<Container>
				{/* <h1 className="text-5xl font-normal font-primary text-center text-foreground tracking-[-0.48px] mt-8.75">
					Hey, I&apos;m Jason A 0 → 1 Software <br /> Engineer with 4 years of
					experience
				</h1> */}
				<h1 className="text-4xl sm:text-5xl font-normal font-primary text-center text-foreground tracking-[-0.48px] mt-8.75">
					Hey, I&apos;m Jason — A Software Engineer turning ideas into products
					0 → 1
				</h1>
				<div className="flex flex-wrap items-center justify-center gap-3 mt-7.5">
					{socialLinks.map((link) => (
						<SocialLink
							key={link.text}
							text={link.text}
							icon={link.icon}
							href={link.href}
						/>
					))}
				</div>
			</Container>
		</div>
	);
}
