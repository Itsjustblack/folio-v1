"use client";

import Image from "next/image";

export interface ITestimonial {
	imageSrc: string;
	role: string;
	name: string;
	content: string;
}

export default function Testimonial({
	imageSrc,
	role,
	name,
	content,
}: ITestimonial) {
	return (
		<div className="space-y-7.5 font-geist">
			<p className="line-clamp-3 text-foreground-muted text-lg leading-7.5 -tracking-[0.18px]">
				“{content}”
			</p>
			<div className="flex gap-x-5 items-center">
			<div className="relative size-12.5 shrink-0 rounded-[5px] overflow-hidden">
					<Image
						src={imageSrc}
						alt={name}
						fill
						className="object-cover"
					/>
				</div>
				<div className="space-y-[2.5px] h-full">
					<span className="text-lg text-foreground font-semibold -tracking-[0.18px]">
						{name}
					</span>
					<p className="text-foreground-muted text-base -tracking-[0.15px]">
						{role}
					</p>
				</div>
			</div>
		</div>
	);
}
