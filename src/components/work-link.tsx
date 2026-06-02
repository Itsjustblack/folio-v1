"use client";

import { LinkIcon } from "@/components/icons";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSound } from "@/context/audio-context";
import Link from "next/link";

export default function WorkLink({ url }: { url: string }) {
	const { play } = useSound();

	return (
		<Tooltip>
			<Link
				href={url}
				target="_blank"
				onClick={() => play("tap")}
			>
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
	);
}
