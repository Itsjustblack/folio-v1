import ArticlesList from "@/components/articles-list";
import Container from "@/components/layout/container";
import BlogIntroSection from "@/sections/writing/blog-intro-section";

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
export default function Writing() {
	return (
		<div className="mt-31.25">
			<BlogIntroSection />
			<Container className="mt-18.75 flex flex-col">
				<ArticlesList articles={articles} />
			</Container>
		</div>
	);
}
