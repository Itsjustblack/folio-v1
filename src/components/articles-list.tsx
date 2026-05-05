interface ArticlePreviewProps {
	date: string;
	title: string;
	description: string;
}

function ArticlePreview({ date, title, description }: ArticlePreviewProps) {
	return (
		<div className="grid grid-cols-subgrid col-span-2 items-start font-geist group-hover:opacity-25 hover:opacity-100! transition-opacity duration-300 ease-in-out cursor-pointer">
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

interface ArticlesListProps {
	articles: ArticlePreviewProps[];
}

export default function ArticlesList({ articles }: ArticlesListProps) {
	return (
		<div className="grid group grid-cols-[auto_1fr] gap-x-12.5 gap-y-6.25">
			{articles.map((article) => (
				<ArticlePreview
					key={article.title}
					{...article}
				/>
			))}
		</div>
	);
}
