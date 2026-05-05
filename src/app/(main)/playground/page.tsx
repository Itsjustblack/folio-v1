"use client";

import { ArrowRightIcon, MoveIcon } from "@/components/icons";
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
	useCallback,
	useEffect,
	useRef,
	useState,
	useSyncExternalStore,
} from "react";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

const DOT_SPACING = 13;
const DOT_RADIUS = 1;
const DOT_COLOR = "#E2E2E2";
// const MIN_SCALE = 0.25;
// const MAX_SCALE = 3;

function createDotPattern(dpr: number): CanvasPattern | null {
	const size = DOT_SPACING * dpr;
	const offscreen = document.createElement("canvas");
	offscreen.width = size;
	offscreen.height = size;
	const octx = offscreen.getContext("2d");
	if (!octx) return null;

	octx.fillStyle = DOT_COLOR;
	octx.beginPath();
	octx.arc(
		DOT_RADIUS * dpr,
		DOT_RADIUS * dpr,
		DOT_RADIUS * dpr,
		0,
		Math.PI * 2,
	);
	octx.fill();

	const tempCanvas = document.createElement("canvas");
	tempCanvas.width = 1;
	tempCanvas.height = 1;
	const tempCtx = tempCanvas.getContext("2d");
	if (!tempCtx) return null;

	return tempCtx.createPattern(offscreen, "repeat");
}

function Card({ x, y }: { x: number; y: number }) {
	return (
		<motion.div
			drag
			dragMomentum={false}
			initial={{
				rotateZ: 6,
				left: x,
				top: y,
				boxShadow: "0 4px 8px #00000040",
			}}
			whileHover={{
				scale: 1.05,
				rotateZ: 0,
				// boxShadow: "none",
			}}
			whileTap={{
				scale: 1.05,
				boxShadow: "0 4px 8px #00000040",
			}}
			className="absolute w-[500px] aspect-video bg-background cursor-grab active:cursor-grabbing rounded-[12px] p-3 z-10"
			onPointerDown={(e) => e.stopPropagation()}
		>
			<div className="relative size-full rounded-[8px] overflow-clip">
				<Image
					src="/folder-demo-preview.png"
					alt="Remita Background"
					fill
					loading="eager"
					priority
					className="object-cover object-top pointer-events-none"
				/>
				<Link href="/playground/folder-demo">
					<Button className="absolute top-3 right-3 flex items-center justify-center size-8 rounded-full bg-white border border-border/25 text-foreground cursor-pointer">
						<ArrowRightIcon className="size-3" />
					</Button>
				</Link>
			</div>
		</motion.div>
	);
}

const CARD_WIDTH = 550;
const CARD_HEIGHT = 263;
const CARD_COUNT = 1;
const CARD_PADDING = 24;

export default function Playground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const cardContainerRef = useRef<HTMLDivElement>(null);
	const textContainerRef = useRef<HTMLDivElement>(null);
	const offsetRef = useRef({ x: 0, y: 0 });
	const patternRef = useRef<CanvasPattern | null>(null);
	const rafIdRef = useRef<number>(0);
	const dragStart = useRef({ x: 0, y: 0 });
	const offsetStart = useRef({ x: 0, y: 0 });
	const [isDragging, setIsDragging] = useState(false);
	const mounted = useSyncExternalStore(
		subscribe,
		getClientSnapshot,
		getServerSnapshot,
	);

	const [cards] = useState<{ x: number; y: number }[]>(() => {
		if (typeof window === "undefined") return [];
		const maxX = Math.max(
			CARD_PADDING,
			window.innerWidth - CARD_WIDTH - CARD_PADDING,
		);
		const maxY = Math.max(
			CARD_PADDING,
			window.innerHeight - CARD_HEIGHT - CARD_PADDING,
		);
		return Array.from({ length: CARD_COUNT }, () => ({
			x: CARD_PADDING + Math.random() * (maxX - CARD_PADDING),
			y: CARD_PADDING + Math.random() * (maxY - CARD_PADDING),
		}));
	});

	const updateCardContainer = useCallback(() => {
		const { x, y } = offsetRef.current;
		if (cardContainerRef.current) {
			cardContainerRef.current.style.transform = `translate(${x}px, ${y}px)`;
		}
		if (textContainerRef.current) {
			textContainerRef.current.style.transform = `translate(${x}px, ${y}px)`;
		}
	}, []);

	const renderFrame = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx || !patternRef.current) return;

		const dpr = window.devicePixelRatio || 1;
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const { x, y } = offsetRef.current;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();
		ctx.scale(dpr, dpr);
		ctx.translate(x, y);

		ctx.fillStyle = patternRef.current;
		ctx.fillRect(
			-x - DOT_SPACING,
			-y - DOT_SPACING,
			width + 2 * DOT_SPACING,
			height + 2 * DOT_SPACING,
		);

		ctx.restore();
	}, []);

	// Canvas setup + rAF loop
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const dpr = window.devicePixelRatio || 1;
		canvas.width = canvas.clientWidth * dpr;
		canvas.height = canvas.clientHeight * dpr;
		patternRef.current = createDotPattern(dpr);

		let running = true;
		function loop() {
			if (!running) return;
			renderFrame();
			rafIdRef.current = requestAnimationFrame(loop);
		}
		loop();

		const handleResize = () => {
			const dpr = window.devicePixelRatio || 1;
			canvas.width = canvas.clientWidth * dpr;
			canvas.height = canvas.clientHeight * dpr;
			patternRef.current = createDotPattern(dpr);
		};
		window.addEventListener("resize", handleResize);

		return () => {
			running = false;
			cancelAnimationFrame(rafIdRef.current);
			window.removeEventListener("resize", handleResize);
		};
	}, [renderFrame]);

	const handlePointerDown = useCallback((e: React.PointerEvent) => {
		setIsDragging(true);
		dragStart.current = { x: e.clientX, y: e.clientY };
		offsetStart.current = { x: offsetRef.current.x, y: offsetRef.current.y };
		(e.target as HTMLElement).setPointerCapture(e.pointerId);
	}, []);

	const handlePointerMove = useCallback(
		(e: React.PointerEvent) => {
			if (!isDragging) return;
			const dx = e.clientX - dragStart.current.x;
			const dy = e.clientY - dragStart.current.y;
			offsetRef.current = {
				x: offsetStart.current.x + dx,
				y: offsetStart.current.y + dy,
			};
			updateCardContainer();
		},
		[isDragging, updateCardContainer],
	);

	const handlePointerUp = useCallback(() => {
		setIsDragging(false);
	}, []);

	return (
		<>
			<NavBar />
			<motion.div
				ref={containerRef}
				className="relative w-full h-dvh overflow-hidden touch-none bg-background"
				style={{ cursor: isDragging ? "grabbing" : "grab" }}
				animate={{ scale: isDragging ? 0.98 : 1 }}
				transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.5 }}
				onPointerDown={handlePointerDown}
				onPointerMove={handlePointerMove}
				onPointerUp={handlePointerUp}
				onPointerCancel={handlePointerUp}
			>
				<canvas
					ref={canvasRef}
					className="absolute inset-0 z-0 w-full h-full"
				/>
				{/* Various Works */}
				<div
					ref={cardContainerRef}
					className="absolute inset-0 z-10 origin-top-left"
					style={{ transform: "translate(0px, 0px) scale(1)" }}
				>
					{mounted &&
						cards.map((card, i) => (
							<Card
								key={i}
								x={card.x}
								y={card.y}
							/>
						))}
				</div>
				{/* Fixed Content */}
				<div
					ref={textContainerRef}
					className="absolute inset-0 z-5 flex flex-col items-center justify-end pointer-events-none origin-top-left"
					style={{ transform: "translate(0px, 0px)" }}
				>
					<div className="mb-25">
						<h1 className="text-[64px] font-normal font-primary text-center text-foreground tracking-[-0.64px]">
							My Playground
						</h1>
						<div className="flex items-center gap-x-1.25 text-center w-fit mx-auto mt-2.5">
							<MoveIcon
								width={24}
								height={24}
								className="text-muted-foreground"
							/>
							<span className="text-muted-foreground font-geist text-xl leading-7.5 -tracking-[0.2px]">
								Drag to move
							</span>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
}
