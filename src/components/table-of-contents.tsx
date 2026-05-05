"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface TOCItem {
	id: string;
	title: string;
}

export interface TOCSection {
	id: string;
	title: string;
	items?: TOCItem[];
	indent?: boolean;
}

export interface TOCProps {
	sections?: TOCSection[];
	activeId?: string;
	className?: string;
}

const defaultSections: TOCSection[] = [
	{
		id: "preface",
		title: "Preface",
		items: [
			{ id: "abstract", title: "Abstract" },
			{ id: "recommendations", title: "Recommendations" },
		],
	},
	{
		id: "how-i-do-things",
		title: "How i do things",
		indent: true,
		items: [
			{ id: "step-1", title: "Step 1: Working Hard" },
			{ id: "step-2", title: "Step 2: Following a Routine" },
			{ id: "step-3", title: "Step 3: Avoid Girls" },
		],
	},
	{
		id: "why-you-need-jesus",
		title: "Why you need Jesus",
		items: [
			{ id: "prov-16-25", title: "Prov 16:25" },
			{ id: "book-of-joshua", title: "Book of Joshua" },
			{ id: "end", title: "End" },
		],
	},
];

export default function TableOfContents({
	sections = defaultSections,
	activeId = "how-i-do-things",
	className,
}: TOCProps) {
	const [selectedId, setSelectedId] = useState(activeId);

	return (
		<div className={cn("flex w-fit flex-col items-start gap-3.75", className)}>
			<p className="w-full font-geist text-[18px] tracking-[-0.18px] text-muted-foreground">
				Table of Contents
			</p>
			<hr className="w-full border-t border-border" />
			<nav className="flex w-full flex-col items-start gap-5">
				{sections.map((section) => (
					<div
						key={section.id}
						className={cn(
							"flex flex-col items-start gap-2.5",
							section.indent && "px-5",
						)}
					>
						<TOCRow
							id={section.id}
							title={section.title}
							active={selectedId === section.id}
							leader="long"
							onSelect={setSelectedId}
						/>
						{section.items?.map((item) => (
							<TOCRow
								key={item.id}
								id={item.id}
								title={item.title}
								active={selectedId === item.id}
								leader="short"
								onSelect={setSelectedId}
							/>
						))}
					</div>
				))}
			</nav>
		</div>
	);
}

function TOCRow({
	id,
	title,
	active,
	leader,
	onSelect,
}: {
	id: string;
	title: string;
	active: boolean;
	leader: "long" | "short";
	onSelect: (id: string) => void;
}) {
	const isLong = leader === "long";
	return (
		<a
			href={`#${id}`}
			onClick={() => onSelect(id)}
			className="group relative flex items-center gap-[7.5px] before:absolute before:inset-x-0 before:-inset-y-1.5 before:content-['']"
		>
			<span
				aria-hidden
				className={cn(
					"h-[1.5px] shrink-0",
					isLong ? "w-10" : "w-5",
					active ? "bg-[oklch(0.488_0.243_264.376)]" : "bg-[oklch(0.572_0_0)]",
					!active && !isLong && "opacity-55",
				)}
			/>
			<span
				className={cn(
					"whitespace-nowrap font-geist text-base tracking-[-0.16px] duration-75 transition-colors",
					active
						? "text-[oklch(0.488_0.243_264.376)]"
						: "text-muted-foreground group-hover:text-foreground",
					!active && !isLong && "opacity-75",
				)}
			>
				{title}
			</span>
		</a>
	);
}
