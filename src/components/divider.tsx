import { cn } from "@/lib/utils";

export interface DividerProps {
	className?: string;
}

export default function Divider({ className }: DividerProps) {
	return (
		<hr className={cn("my-7.5 sm:my-12.5 border-border border-t", className)} />
	);
}
