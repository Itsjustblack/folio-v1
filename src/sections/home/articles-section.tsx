"use client";

import { blurReveal } from "@/lib/constants";
import { motion } from "motion/react";
import ArticlesList from "../../components/articles-list";
import { ArrowRightIcon } from "../../components/icons";
import Container from "../../components/layout/container";
import { Button } from "../../components/ui/button";
import Link from "next/link";

const articles = [
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

export default function ArticlesSection() {
	return (
		<Container className="mt-12.5 flex flex-col">
			<h2 className="text-[32px] font-primary text-foreground -tracking-[0.32px] capitalize">
				Thoughts
			</h2>
			<div className="my-7.5">
				<ArticlesList articles={articles} />
			</div>
			<Link
				href="/writing"
				className="ml-auto"
			>
				<Button>
					View All
					<ArrowRightIcon
						width={15}
						height={23}
						className="fill-foreground"
					/>
				</Button>
			</Link>
		</Container>
	);
}
