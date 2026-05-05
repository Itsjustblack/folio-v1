import Link from "next/link";

export interface PrevNextNavProps {
	previous?: {
		slug: string;
		title: string;
	};
	next?: {
		slug: string;
		title: string;
	};
}

export default function ContentNav({ previous, next }: PrevNextNavProps) {
	return (
		<div className="flex items-start justify-between gap-8 border-t border-black/10 pt-12.5 my-12.5 font-normal">
			{previous ? (
				<Link
					href={previous.slug}
					className="group flex flex-col w-fit"
				>
					<span className="text-[15px] tracking-[-0.16px] text-black/50 group-hover:text-black/80 transition-colors duration-200 ease-out">
						Previous
					</span>
					<span className="text-lg tracking-[-0.18px] text-black/80 group-hover:text-black transition-colors duration-200 ease-out">
						{previous.title}
					</span>
				</Link>
			) : (
				<div className="flex-1" />
			)}
			{next ? (
				<Link
					href={next.slug}
					className="group flex flex-col w-fit items-end text-right"
				>
					<span className="text-[15px] tracking-[-0.16px] text-black/50 group-hover:text-black/80 transition-colors duration-200 ease-out">
						Next
					</span>
					<span className="text-lg tracking-[-0.18px] text-black/80 group-hover:text-black transition-colors duration-200 ease-out">
						{next.title}
					</span>
				</Link>
			) : (
				<div className="flex-1" />
			)}
		</div>
	);
}
