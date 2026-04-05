"use client";

import { motion } from "motion/react";
import {
	CalendlyIcon,
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
} from "../../components/icons";
import Container from "../../components/layout/container";
import PolaroidDeck from "../../components/polaroid-deck";
import SocialLink from "../../components/social-link";

const textReveal = {
	hidden: { opacity: 0, y: 2, filter: "blur(3px)" },
	visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const socialLinks = [
	{
		text: "twitter",
		href: "#",
		icon: (
			<TwitterIcon
				width={20}
				height={20}
			/>
		),
	},
	{
		text: "linkedin",
		href: "#",
		icon: (
			<LinkedinIcon
				width={20}
				height={20}
			/>
		),
	},
	{
		text: "github",
		href: "#",
		icon: (
			<GithubIcon
				width={20}
				height={20}
			/>
		),
	},
	{
		text: "instagram",
		href: "#",
		icon: (
			<InstagramIcon
				width={20}
				height={20}
			/>
		),
	},
	{
		text: "calendly",
		href: "#",
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
		<Container className="mt-7.5">
			<section className="max-w-170.5 w-full mx-auto mt-5">
				<PolaroidDeck />

				<motion.div
					initial="hidden"
					animate="visible"
					transition={{ delayChildren: 2.4, staggerChildren: 0.1 }}
				>
					<motion.h1
						variants={textReveal}
						transition={{ type: "spring", stiffness: 300, damping: 25 }}
						className="text-5xl font-normal font-primary text-center text-foreground tracking-[-0.48px] mt-8.75"
					>
						Hey, I&apos;m Jason A 0 → 1 Software <br /> Engineer with 4 years of
						experience
					</motion.h1>

					<motion.div
						variants={textReveal}
						transition={{ type: "spring", stiffness: 300, damping: 25 }}
						className="flex items-center justify-center gap-3 mt-7.5"
					>
						{socialLinks.map((link) => (
							<SocialLink
								key={link.text}
								text={link.text}
								icon={link.icon}
								href={link.href}
							/>
						))}
					</motion.div>
				</motion.div>
			</section>
		</Container>
	);
}
