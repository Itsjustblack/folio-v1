"use client";

import type { ComponentType, SVGProps } from "react";

export interface IExperience {
	logo: ComponentType<SVGProps<SVGSVGElement>>;
	role: string;
	company: string;
	location: string;
	period: string;
}

export default function Experience({
	logo: Logo,
	role,
	company,
	location,
	period,
}: IExperience) {
	return (
		<li className="flex gap-x-5 items-center">
			<Logo className="size-9.75 sm:size-12.5 shrink-0" />
			<div className="font-geist">
				<p className="text-base sm:text-lg space-y-1.25 text-foreground -tracking-[0.18px]">
					{role} <span className="text-sm">@</span>{" "}
					<span className="font-semibold">{company}</span>
				</p>
				<p className="text-foreground text-sm sm:text-base -tracking-[0.15px]">
					{location} • <span className="text-muted-foreground">{period}</span>
				</p>
			</div>
		</li>
	);
}
