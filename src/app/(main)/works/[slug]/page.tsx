import ContentNav from "@/components/content-nav";
import Container from "@/components/layout/container";
import WorkLink from "@/components/work-link";
import fs from "fs";
import path from "path";

export function generateStaticParams() {
	const dir = path.join(process.cwd(), "src/content/projects");
	return fs
		.readdirSync(dir)
		.filter((f) => f.endsWith(".mdx"))
		.map((f) => ({ slug: f.replace(".mdx", "") }));
}

export default async function Project({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	return <ProjectContent slug={slug} />;
}

async function ProjectContent({ slug }: { slug: string }) {
	"use cache";
	const { default: Content, metadata } = await import(
		`@/content/projects/${slug}.mdx`
	);

	return (
		<Container className="pt-52.25 font-geist mb-12.5 prose prose-h1:font-normal prose-headings:my-0 prose-headings:italic prose-h1:tracking-[-0.48px] prose-h1:mb-1.5 prose-p:text-[17px] prose-p:my-7.5 prose-img:m-0 prose-li:text-[17px] prose-li:text-black/60 prose-headings:text-foreground prose-p:text-muted-foreground [&_p:has(+ul)]:mb-0 prose-a:no-underline">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="capitalize font-primary text-foreground text-5xl">
						{metadata.title}
					</h1>
					<span className="text-muted text-center font-geist text-base font-normal leading-normal tracking-[-0.18px]">
						{metadata.date}
					</span>
				</div>
				<WorkLink url={metadata.url} />
			</div>
			<Content />
			<ContentNav currentSlug={slug} />
		</Container>
	);
}
