"use client";

import Divider from "@/components/divider";
import Experience, { type IExperience } from "../../components/experience";
import { QuidaxLogo, RemitaMiniLogo } from "../../components/icons";
import Container from "../../components/layout/container";

const experiences: IExperience[] = [
	{
		logo: QuidaxLogo,
		role: "Software Engineer",
		company: "Quidax",
		location: "Lagos, Nigeria",
		period: "January 2026 - Present",
	},
	{
		logo: RemitaMiniLogo,
		role: "Frontend Engineer (Intern)",
		company: "Remita",
		location: "Lagos, Nigeria",
		period: "March 2024 - September 2024",
	},
];

export default function ExperienceSection() {
	return (
		<Container className="space-y-7.5">
			<h2 className="text-3xl text-[28px] sm:text-[32px] font-normal font-primary text-foreground -tracking-[0.32px]">
				Experience
			</h2>
			<ul className="flex flex-col gap-y-6.5">
				{experiences.map((exp) => (
					<Experience
						key={exp.company}
						{...exp}
					/>
				))}
			</ul>
			<Divider />
		</Container>
	);
}
