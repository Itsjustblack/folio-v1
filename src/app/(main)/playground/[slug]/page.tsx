import PrevNextNav from "@/components/content-nav";
import { LinkIcon } from "@/components/icons";
import Container from "@/components/layout/container";
import PreviewDemo from "@/components/preview-demo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PLAYGROUND_SLUGS = ["folder-demo", "cards-demo"] as const;

export async function generateStaticParams() {
	return PLAYGROUND_SLUGS.map((slug) => ({ slug }));
}

export default function PlaygroundItem() {
	return (
		<Container className="pt-52.25 font-geist mb-12.5 prose prose-h1:font-normal prose-headings:my-0 prose-headings:italic prose-h1:tracking-[-0.48px] prose-h1:mb-1.5 prose-p:text-[17px] prose-p:my-7.5 prose-img:m-0 prose-li:text-[17px] prose-li:text-black/60 prose-headings:text-foreground prose-p:text-muted-foreground [&_p:has(+ul)]:mb-0 prose-a:no-underline">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="capitalize font-primary text-foreground text-5xl">
						Folder Demo
					</h1>
					<span className="text-muted text-center font-geist text-base font-normal leading-normal tracking-[-0.18px]">
						April 2026
					</span>
				</div>
				<Button
					asChild
					className="size-12! rounded-full overflow-clip border border-border"
				>
					{/* LETS ADD A TOOLTIP THAT SAYS VIEW WORK WHEN HOVVERED */}
					<LinkIcon
						width={16}
						height={16}
					/>
				</Button>
			</div>
			<div>
				{/* <h1 className="capitalize font-primary text-foreground text-5xl tracking-[-0.48px]">
					Folder Demo
				</h1> */}
				<p className="my-7.5 text-muted-foreground leading-7.5">
					An interactive folder that reveals its confidential contents through a
					choreographed spring animation sequence. Original Concept by{" "}
					<Link
						className="font-geist font-medium leading-7.5 underline text-black decoration-solid decoration-auto underline-offset-auto [text-underline-position:from-font]"
						href="https://x.com/AdityaSur11/status/2033113474356699526"
						target="_blank"
						rel="noopener noreferrer"
					>
						@AdityaSur11
					</Link>
					{/* <CustomLink
						href="https://x.com/AdityaSur11/status/2033113474356699526"
						target="_blank"
						rel="noopener noreferrer"
						imageSrc="/gemini.png"
						imageAlt="Article preview"
						title="Claude"
						description="Claude builds on your ideas, expands on your logic, and simplifies complexity one step at a time."
						logoSrc="/claude-logo.svg"
						logoAlt="Claude logo"
					>
						@AdityaSur11
					</CustomLink> */}
				</p>
				<PreviewDemo />
			</div>
			<PrevNextNav
				// previous={{ slug: "post-slug", title: "Post Title" }}
				next={{ slug: "cards-demo", title: "Cards Demo" }}
			/>
		</Container>
	);
}
