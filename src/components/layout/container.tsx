import { cn } from "../../lib/utils";

export default function Container({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<>
			<section className={cn("mx-auto max-w-237.5 w-full", className)}>
				{children}
			</section>
			{/* <div
				className="w-screen fixed flex z-800 -bottom-2 select-none pointer-events-none"
				style={{
					backdropFilter: "blur(2px)",
					height: 120,
					background: "linear-gradient(transparent, rgb(249, 250, 250))",
					maskImage:
						"linear-gradient(to top, rgb(249, 250, 250) 50%, transparent)",
				}}
			/> */}
		</>
	);
}
