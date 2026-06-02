import fs from "fs";
import path from "path";
import NavItem from "./content-nav-item";

async function getProjectSlugs(): Promise<string[]> {
	const dir = path.join(process.cwd(), "src/content/projects");
	return fs
		.readdirSync(dir)
		.filter((f) => f.endsWith(".mdx"))
		.map((f) => f.replace(".mdx", ""));
}

async function resolveLink(slug: string | null) {
	if (!slug) return null;
	const { metadata } = await import(`@/content/projects/${slug}.mdx`);
	return { slug, title: metadata.title as string };
}

export default async function ContentNav({
	currentSlug,
}: {
	currentSlug: string;
}) {
	"use cache";
	const slugs = await getProjectSlugs();
	const idx = slugs.indexOf(currentSlug);
	const prevSlug = idx > 0 ? slugs[idx - 1] : null;
	const nextSlug = idx !== -1 && idx < slugs.length - 1 ? slugs[idx + 1] : null;

	const [previous, next] = await Promise.all([
		resolveLink(prevSlug),
		resolveLink(nextSlug),
	]);

	return (
		<div className="flex items-start justify-between gap-8 border-t border-black/10 pt-12.5 my-12.5 font-normal">
			{previous ? (
				<NavItem label="Previous" link={previous} align="left" />
			) : (
				<div className="flex-1" />
			)}
			{next ? (
				<NavItem label="Next" link={next} align="right" />
			) : (
				<div className="flex-1" />
			)}
		</div>
	);
}
