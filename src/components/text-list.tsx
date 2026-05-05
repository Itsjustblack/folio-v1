interface TextListProps {
	items: string[];
}

export default function TextList({ items }: TextListProps) {
	return (
		<ul className="w-full m-0 list-disc marker:text-foreground/80">
			{items.map((item, index) => (
				<li
					key={index}
					// className="flex items-start p-0 gap-x-2.5 text-lg font-normal leading-normal text-muted-foreground font-geist tracking-[-0.18px]"
				>
					{item}
				</li>
			))}
		</ul>
	);
}
