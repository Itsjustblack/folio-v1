import type { MDXComponents } from "mdx/types";
import CustomImage from "./components/custom-image";

const components = {
	// Allows customizing built-in components, e.g. to add styling.
	h2: (props) => (
		<h2 className="capitalize font-primary font-normal text-foreground text-[32px] tracking-[-0.32px]">
			{props.children}
		</h2>
	),
	p: (props) => <p className="leading-7.5">{props.children}</p>,
	img: (props) => (
		<CustomImage
			src={props.src}
			imageClassName="object-contain!"
			alt={props.alt || "Image"}
		/>
	),
	ul: (props) => (
		<ul className="w-full m-0 list-disc marker:text-foreground/80">
			{props.children}
		</ul>
	),
	hr: () => <hr className="my-7.5 sm:my-12.5 border-border border-t" />,
	// li: (props) => (
	// 	<li className="flex items-start p-0 gap-x-2.5 text-lg font-normal leading-normal text-muted-foreground font-geist tracking-[-0.18px]">
	// 		{props.children}
	// 	</li>
	// ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
	return components;
}
