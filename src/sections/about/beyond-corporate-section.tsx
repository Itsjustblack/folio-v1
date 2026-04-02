"use client";

import type { IExperience } from "../../components/experience";
import Experience from "../../components/experience";
import { GDGLogo, HSLLogo, KoraLogo } from "../../components/icons";
import Container from "../../components/layout/container";

const experiences: IExperience[] = [
	{
		logo: KoraLogo,
		role: "Winning Team Member",
		company: "Kora Hackathon",
		location: "Lagos, Nigeria",
		period: "June 2025",
	},
	{
		logo: HSLLogo,
		role: "Core Member, Creators’ Community",
		company: "Hebron Startup Lab",
		location: "Ogun, Nigeria",
		period: "September 2024 – July 2025",
	},
	{
		logo: GDGLogo,
		role: "Frontend Track Lead",
		company: "Google Developers Group (GDG)",
		location: "Ogun, Nigeria",
		period: "October 2024 – Present",
	},
];

export default function BeyondCorporateSection() {
	return (
		<Container className="space-y-7.5">
			<h2 className="text-[32px] font-normal font-primary text-foreground -tracking-[0.32px]">
				Beyond Corporate
			</h2>
			<ul className="flex flex-col gap-y-6.5">
				{experiences.map((exp) => (
					<Experience
						key={exp.company}
						{...exp}
					/>
				))}
			</ul>
			<hr className="my-12.5 border-border border-t" />
		</Container>
	);
}
