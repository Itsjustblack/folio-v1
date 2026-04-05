"use client";

import Button from "../../components/button";
import { ArrowRightIcon } from "../../components/icons";
import Container from "../../components/layout/container";

interface ArticlePreviewProps {
	date: string;
	title: string;
	description: string;
}

const articles: ArticlePreviewProps[] = [
	{
		date: "June 2025",
		title: "Why I’m the Best Frontend",
		description:
			"I had the exceptional pleasure of working closely with Helin at Homebox, and I can’t speak highly enough of her.",
	},
	{
		date: "March 2025",
		title: "Building Scalable Design Systems",
		description:
			"A deep dive into how to structure tokens, components, and documentation for teams that need to move fast without breaking things.",
	},
	{
		date: "January 2025",
		title: "The Art of Micro-Interactions",
		description:
			"Small animations and transitions can make or break a user’s perception of quality.",
	},
];

function ArticlePreview({ date, title, description }: ArticlePreviewProps) {
	return (
		<div className="grid grid-cols-subgrid col-span-2 items-start font-geist group-hover:opacity-25 hover:opacity-100! transition-opacity duration-190 cursor-pointer">
			<p className="text-nowrap text-[15px] text-muted-foreground -tracking-[0.15px] col-span-1">
				{date}
			</p>
			<div className="space-y-1.25">
				<span className="text-[19px] font-semibold -tracking-[0.18px] text-foreground truncate">
					{title}
				</span>
				<p className="text-muted-foreground text-lg leading-7.5 -tracking-[0.18px] line-clamp-2 w-full">
					{description}
				</p>
			</div>
		</div>
	);
}

export default function ArticlesSection() {
	return (
		<Container className="mt-12.5">
			<h2 className="text-[32px] font-primary text-foreground -tracking-[0.32px] capitalize">
				Writing
			</h2>
			<div className="grid group grid-cols-[auto_1fr] gap-x-12.5 gap-y-6.25 my-7.5">
				{articles.map((article) => (
					<ArticlePreview
						key={article.title}
						{...article}
					/>
				))}
			</div>
			<Button
				className="ml-auto"
				text="View All"
				icon={
					<ArrowRightIcon
						width={15}
						height={23}
						className="fill-foreground"
					/>
				}
			/>
		</Container>
	);
}
