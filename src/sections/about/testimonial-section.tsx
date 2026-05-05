"use client";

import Container from "../../components/layout/container";
import type { ITestimonial } from "../../components/testimonial";
import Testimonial from "../../components/testimonial";
import Divider from "../../components/divider";

const TESTIMONIALS: ITestimonial[] = [
	{
		imageSrc: "/polaroid-3.jpg",
		role: "Senior Software Engineer",
		name: "Adebayo A.",
		content:
			"Jason was the kind of intern you forget is an intern. He picked up the codebase fast, asked sharp questions, and shipped frontend work that held up under real traffic. He'll be running teams soon.",
	},
	{
		imageSrc: "/polaroid-2.jpg",
		role: "Product Manager",
		name: "John Doe",
		content:
			"We brought Jason in to lead the frontend on a complex P2P exchange and he made it look easy. Wallet integrations, real-time alerts, KYC — all of it shipped clean. Genuinely one of the most reliable engineers I've worked with.",
	},
	{
		imageSrc: "/polaroid-7.jpg",
		role: "Design Engineer",
		name: "Victor Williams",
		content:
			"Jason ran our frontend track at GDG and somehow made the hard stuff feel doable. He explains things clearly, mentors with patience, and pushes you to actually build — not just watch tutorials.",
	},
];

export default function TestimonialSection() {
	return (
		<Container className="space-y-7.5">
			<h2 className="text-3xl text-[28px] sm:text-[32px] font-normal font-primary text-foreground -tracking-[0.32px]">
				Testimonial
			</h2>
			<ul className="flex flex-col gap-y-7.5 lg:gap-y-12">
				{TESTIMONIALS.map((testimonial, index) => (
					<li key={index}>
						<Testimonial {...testimonial} />
					</li>
				))}
			</ul>
			<Divider />
		</Container>
	);
}
