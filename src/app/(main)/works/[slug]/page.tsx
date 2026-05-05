import ContentNav from "@/components/content-nav";
import CustomImage from "@/components/custom-image";
import { LinkIcon } from "@/components/icons";
import Container from "@/components/layout/container";
import TextList from "@/components/text-list";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const END_GOAL_ITEMS = [
	"I collaborated with designers to build an intuitive and visually appealing website",
	"I collaborated with designers to build an intuitive and visually appealing website",
	"I collaborated with designers to build an intuitive and visually appealing website",
];

const WORK_SLUGS = ["clusteer", "remita", "omnikaido", "bellpay"] as const;

export async function generateStaticParams() {
	return WORK_SLUGS.map((slug) => ({ slug }));
}

export default async function Project({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	"use cache";
	const { slug } = await params;

	return (
		<Container className="pt-52.25 font-geist mb-12.5 prose prose-h1:font-normal prose-headings:my-0 prose-headings:italic prose-h1:tracking-[-0.48px] prose-h1:mb-1.5 prose-p:text-[17px] prose-p:my-7.5 prose-img:m-0 prose-li:text-[17px] prose-li:text-black/60 prose-headings:text-foreground prose-p:text-muted-foreground [&_p:has(+ul)]:mb-0 prose-a:no-underline">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="capitalize font-primary text-foreground text-5xl">
						{slug}
					</h1>
					<span className="text-muted text-center font-geist text-base font-normal leading-normal tracking-[-0.18px]">
						June 2025 – September 2025
					</span>
				</div>
				<Tooltip>
					<Link href={`/works`}>
						<TooltipTrigger className="flex items-center justify-center size-12 rounded-full overflow-clip border border-black/5 active:scale-90 hover:bg-black/5 transition-all duration-200">
							<LinkIcon
								width={16}
								height={16}
							/>
						</TooltipTrigger>
					</Link>
					<TooltipContent>
						<p>View Work</p>
					</TooltipContent>
				</Tooltip>
			</div>
			<div>
				<p className="mb-7.5">
					I led the frontend architecture of a multi-currency P2P crypto-to-fiat
					exchange using Next.js and TypeScript, integrating over five distinct
					blockchain wallets to ensure secure trading flows and real-time
					synchronization. To enhance user security and responsiveness, I also
					implemented instant transaction alerts across browser and mobile
					devices using Firebase Cloud Messaging and a custom service worker.
				</p>
				<CustomImage
					src="/jason.jpg"
					alt="My Graduation"
				/>
			</div>
			{/* <Divider /> */}
			<div className="my-15">
				<h2 className="capitalize font-primary font-normal text-foreground text-[32px] tracking-[-0.32px]">
					My role
				</h2>
				<p className="leading-7.5">
					I collaborated with designers to build an intuitive and visually
					appealing website for a payment solutions company. By prioritizing a
					clean interface, we delivered a seamless digital experience that
					successfully enhanced user satisfaction and significantly increased
					web traffic.
				</p>
				<p className="my-7.5 leading-7.5">
					To ensure optimal performance, I streamlined the entire codebase and
					implemented highly effective caching strategies. These targeted
					technical optimizations drastically reduced page load times and
					improved overall site speed, providing all visitors with a fast,
					reliable browsing experience.
				</p>
				{/* <TextList items={END_GOAL_ITEMS} /> */}
				<CustomImage
					src="/remita.jpg"
					alt="My Graduation"
				/>
			</div>
			{/* <Divider /> */}
			<div className="my-15">
				<h2 className="capitalize font-primary font-normal text-foreground text-[32px] tracking-[-0.32px]">
					End Goal
				</h2>
				<p className="my-7.5 leading-7.5">
					I collaborated with designers to build an intuitive and visually
					appealing website for a payment solutions company. By prioritizing a
					clean interface.
				</p>
				<TextList items={END_GOAL_ITEMS} />
			</div>
			<ContentNav
				previous={{ slug: "post-slug", title: "Post Title" }}
				next={{ slug: "next-slug", title: "Next Title" }}
			/>
		</Container>
	);
}
