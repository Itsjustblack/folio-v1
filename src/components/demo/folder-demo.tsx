"use client";

import { AdiLogo } from "@/components/icons";
import { useRef, useState } from "react";
import { motion, useAnimate } from "motion/react";

export default function FolderDemo() {
	const [folderScope, animateFolder] = useAnimate();
	const [cardScope, animateCard] = useAnimate();
	const isAnimating = useRef(false);
	const [animating, setAnimating] = useState(false);

	async function handleClick() {
		if (isAnimating.current) return;

		isAnimating.current = true;
		setAnimating(true);

		try {
			await animateCard(
				cardScope.current,
				{ x: 270, rotateZ: 0 },
				{ type: "spring", stiffness: 130, damping: 20, delay: 0.3 },
			);

			await animateCard(cardScope.current, { zIndex: 5 }, { duration: 0.5 });

			await Promise.all([
				animateFolder(
					folderScope.current,
					{ rotateY: 0 },
					{ type: "spring", stiffness: 250, damping: 45 },
				),

				animateCard(
					cardScope.current,
					{ x: 0 },
					{ type: "spring", stiffness: 350, damping: 30 },
				),

				animateCard(
					cardScope.current,
					{ rotateZ: 6, rotateY: 180 },
					{ type: "spring", stiffness: 230, damping: 30, delay: 0.15 },
				),
			]);

			await animateCard(
				cardScope.current,
				{ rotateY: 0 },
				{ type: "spring", stiffness: 230, damping: 30, delay: 0.8 },
			);

			await Promise.all([
				animateFolder(
					folderScope.current,
					{ rotateY: -36 },
					{ type: "spring", stiffness: 180, damping: 20, delay: 0.3 },
				),

				animateCard(
					cardScope.current,
					{ x: 380, rotateZ: 0 },
					{ type: "spring", stiffness: 210, damping: 30 },
				),
			]);

			await Promise.all([
				animateCard(cardScope.current, { zIndex: 3 }, { duration: 0.5 }),

				animateCard(
					cardScope.current,
					{ x: 0, rotateZ: 6 },
					{ type: "spring", stiffness: 210, damping: 30 },
				),
				animateFolder(
					folderScope.current,
					{ rotateY: 0 },
					{ type: "spring", stiffness: 250, damping: 45, delay: 0.5 },
				),
			]);
		} finally {
			isAnimating.current = false;
			setAnimating(false);
		}
	}

	async function handleHoverStart() {
		if (isAnimating.current) return;

		await Promise.all([
			animateFolder(
				folderScope.current,
				{ rotateY: -36 },
				{ type: "spring", stiffness: 180, damping: 20, delay: 0.1 },
			),
			animateCard(
				cardScope.current,
				{ x: 30, rotateZ: 6 },
				{ type: "spring", stiffness: 150, damping: 20, delay: 0.1 },
			),
		]);
	}

	async function handleHoverEnd() {
		if (isAnimating.current) return;

		await Promise.all([
			animateFolder(
				folderScope.current,
				{ rotateY: 0 },
				{ type: "spring", stiffness: 250, damping: 45 },
			),
			animateCard(
				cardScope.current,
				{ x: 0, rotateZ: 0 },
				{ type: "spring", stiffness: 210, damping: 30 },
			),
		]);
	}

	return (
		<motion.div
			style={{ perspective: 800 }}
			whileTap={animating ? undefined : { scale: 0.98 }}
			transition={{ type: "spring", stiffness: 600, damping: 20 }}
			className="relative h-100 w-85 cursor-pointer scale-85"
			onClick={handleClick}
			onHoverStart={handleHoverStart}
			onHoverEnd={handleHoverEnd}
		>
			<motion.div
				ref={folderScope}
				style={{
					transformOrigin: "left center",
				}}
				className="relative z-5 bg-[oklch(0.488_0.243_264.376)] size-full rounded-[20px] border-[color-mix(in_oklch,oklch(0.488_0.243_264.376),#ffffff_6%)] border-t-8 p-6 flex flex-col pointer-events-none"
			>
				<AdiLogo
					width={40}
					height={40}
				/>
				<div className="mt-auto mb-3.5">
					<span className="text-white text-lg font-light font-geist-mono uppercase">
						Confidential Files
					</span>
					<p className="text-white/80! m-0! text-sm">Internal use only</p>
				</div>
			</motion.div>

			<div className="absolute inset-0 z-2 bg-[color-mix(in_oklch,oklch(0.488_0.243_264.376),#000000_7%)] rounded-[20px] pointer-events-none"></div>

			<motion.div
				ref={cardScope}
				initial={{ x: 0, rotateZ: 0, rotateY: 0, zIndex: 3 }}
				className="absolute inset-0 bg-white rounded-[20px] scale-[0.9] my-auto transform-3d pointer-events-none"
			>
				{/* Front face */}
				<div className="absolute inset-0 p-4 flex justify-end backface-hidden">
					<span className="text-lg text-gray-800 font-geist-mono font-normal [writing-mode:vertical-lr] self-start pt-12">
						DO NOT OPEN
					</span>
				</div>

				{/* Back face */}
				<div className="absolute inset-0 px-5 py-10 grid gap-y-4 rounded-[20px] font-inter bg-white backface-hidden transform-[rotateY(180deg)]">
					<span className="text-sm leading-5 text-gray-800 font-geist-mono font-normal">
						This document is classified and intended solely for authorized
						personnel.
					</span>
					<span className="text-sm leading-5 text-gray-800 font-geist-mono font-normal">
						Access without proper clearance is strictly prohibited and may lead
						to serious consequences.
					</span>
					<span className="text-sm leading-5 text-gray-800 font-geist-mono font-normal">
						By continuing, you acknowledge that you understand the sensitivity
						of the material and agree to handle it responsibly. ... 👍🏾👋
					</span>
					<span className="text-sm leading-5 text-gray-800 font-geist-mono font-normal">
						You really don&apos;t follow instructions, do you?
					</span>
				</div>
			</motion.div>
		</motion.div>
	);
}
