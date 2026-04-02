"use client";

import Container from "../../components/layout/container";
import type { ITestimonial } from "../../components/testimonial";
import Testimonial from "../../components/testimonial";

const TESTIMONIALS: ITestimonial[] = [
	{
		imageSrc: "/alex-2.jpg",
		role: "Product Manager",
		name: "John Doe",
		content:
			"I had the exceptional pleasure of working closely with Helin at Homebox, and I can’t speak highly enough of her. Helin’s design work is truly best in class — her extensive knowledge of UX and UI best practices, combined with her originality, creativity and structured approach, made every collaboration seamless and successful.",
	},
	{
		imageSrc: "/alex-2.jpg",
		role: "Product Manager",
		name: "John Doe",
		content:
			"I had the exceptional pleasure of working closely with Helin at Homebox, and I can’t speak highly enough of her. Helin’s design work is truly best in class — her extensive knowledge of UX and UI best practices, combined with her originality, creativity and structured approach, made every collaboration seamless and successful.",
	},
	{
		imageSrc: "/alex-2.jpg",
		role: "Product Manager",
		name: "John Doe",
		content:
			"I had the exceptional pleasure of working closely with Helin at Homebox, and I can’t speak highly enough of her. Helin’s design work is truly best in class — her extensive knowledge of UX and UI best practices, combined with her originality, creativity and structured approach, made every collaboration seamless and successful.",
	},
];

export default function TestimonialSection() {
	return (
		<Container className="space-y-7.5">
			<h2 className="text-[32px] font-normal font-primary text-foreground -tracking-[0.32px]">
				Testimonial
			</h2>
			<ul className="flex flex-col gap-y-12">
				{TESTIMONIALS.map((testimonial, index) => (
					<li key={index}>
						<Testimonial {...testimonial} />
					</li>
				))}
			</ul>
			<hr className="my-12.5 border-border border-t" />
		</Container>
	);
}
