"use client";

import { useCurrentTime } from "../hooks/use-current-time";
import { cn } from "../lib/utils";

const DEFAULT_SIZE = 160;

export default function AnalogClock({
	className,
	size = DEFAULT_SIZE,
}: {
	className?: string;
	size?: number;
}) {
	const SIZE = size;
	const CENTER = SIZE / 2;
	const DOT_RADIUS = SIZE / 2 - 15;
	const NUMBER_INSET = SIZE * 0.18;
	const time = useCurrentTime();

	return (
		<div className={cn("space-y-2.5 size-fit", className)}>
			<div
				className="relative font-geist rounded-[50%] flex items-center justify-center w-full aspect-square"
				style={{ width: SIZE, height: SIZE }}
			>
				<svg
					viewBox={`0 0 ${SIZE} ${SIZE}`}
					className="absolute inset-0 w-full h-full"
				>
					{/* Minute markers */}
					{Array.from({ length: 60 }, (_, i) => {
						if (i % 5 === 0) return null;
						const angle = (i * 6 * Math.PI) / 180;
						const tickLen = 5;
						const x1 = CENTER + (DOT_RADIUS - tickLen / 2) * Math.cos(angle);
						const y1 = CENTER + (DOT_RADIUS - tickLen / 2) * Math.sin(angle);
						const x2 = CENTER + (DOT_RADIUS + tickLen / 2) * Math.cos(angle);
						const y2 = CENTER + (DOT_RADIUS + tickLen / 2) * Math.sin(angle);
						return (
							<line
								key={`m-${i}`}
								x1={x1}
								y1={y1}
								x2={x2}
								y2={y2}
								stroke="var(--color-foreground-muted)"
								strokeWidth="1.5"
								strokeLinecap="round"
								opacity="0.5"
							/>
						);
					})}

					{/* Hour markers */}
					{Array.from({ length: 12 }, (_, i) => {
						const angle = (i * 30 * Math.PI) / 180;
						const tickLen = 7;
						const x1 = CENTER + (DOT_RADIUS - tickLen / 2) * Math.cos(angle);
						const y1 = CENTER + (DOT_RADIUS - tickLen / 2) * Math.sin(angle);
						const x2 = CENTER + (DOT_RADIUS + tickLen / 2) * Math.cos(angle);
						const y2 = CENTER + (DOT_RADIUS + tickLen / 2) * Math.sin(angle);
						return (
							<line
								key={`h-${i}`}
								x1={x1}
								y1={y1}
								x2={x2}
								y2={y2}
								stroke="var(--color-foreground)"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						);
					})}
				</svg>

				{Array.from({ length: 12 }, (_, i) => {
					const hour = i + 1;
					const angle = ((hour * 30 - 90) * Math.PI) / 180;
					const radius = SIZE / 2 - NUMBER_INSET;
					const x = SIZE / 2 + radius * Math.cos(angle);
					const y = SIZE / 2 + radius * Math.sin(angle);
					return (
						<div
							key={hour}
							className="absolute size-5 flex items-center justify-center text-foreground font-bold -tracking-[0.01em] leading-[1em]"
							style={{
								left: x,
								top: y,
								transform: "translate(-50%, -50%)",
								fontSize: SIZE * 0.05,
							}}
						>
							{hour}
						</div>
					);
				})}
				<svg
					viewBox={`0 0 ${SIZE} ${SIZE}`}
					style={{
						position: "absolute",
						inset: 0,
						zIndex: 10,
						width: "100%",
						height: "100%",
					}}
				>
					{(() => {
						const cx = SIZE / 2;
						const cy = SIZE / 2;
						const hours = time.getHours() % 12;
						const minutes = time.getMinutes();
						const seconds = time.getSeconds();
						const hourAngle =
							((hours + minutes / 60) * 30 - 90) * (Math.PI / 180);
						const minuteAngle =
							((minutes + seconds / 60) * 6 - 90) * (Math.PI / 180);
						const secondAngle = (seconds * 6 - 90) * (Math.PI / 180);
						const hourLen = SIZE * 0.28;
						const minuteLen = SIZE * 0.38;
						const secondLen = SIZE * 0.42;
						const secondTail = SIZE * 0.14;
						return (
							<>
								<line
									x1={cx}
									y1={cy}
									x2={cx + hourLen * Math.cos(hourAngle)}
									y2={cy + hourLen * Math.sin(hourAngle)}
									stroke="var(--color-muted)"
									strokeWidth={2}
									strokeLinecap="round"
								/>
								<line
									x1={cx}
									y1={cy}
									x2={cx + minuteLen * Math.cos(minuteAngle)}
									y2={cy + minuteLen * Math.sin(minuteAngle)}
									stroke="var(--color-muted)"
									strokeWidth={2}
									strokeLinecap="round"
								/>
								<line
									x1={cx - secondTail * Math.cos(secondAngle)}
									y1={cy - secondTail * Math.sin(secondAngle)}
									x2={cx + secondLen * Math.cos(secondAngle)}
									y2={cy + secondLen * Math.sin(secondAngle)}
									stroke="var(--color-foreground)"
									strokeWidth={2}
									strokeLinecap="round"
								/>
								<circle
									cx={cx}
									cy={cy}
									r={SIZE * 0.03}
									fill="var(--color-foreground)"
								/>
							</>
						);
					})()}
				</svg>
			</div>
			<div
				style={{ fontSize: SIZE * 0.05 }}
				className="font-geist -tracking-[0.13px] flex items-center gap-x-2.5 mx-auto w-fit"
			>
				🇳🇬
				<span className="inline-block text-foreground-muted">{`${time.getHours()}:${time.getMinutes()}`}</span>
			</div>
		</div>
	);
}
