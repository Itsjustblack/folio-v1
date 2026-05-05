"use client";

import { cn } from "@/lib/utils";
import { useModal } from "@/providers/modal-provider";
import { AnimatePresence, motion, type Variants } from "motion/react";
import Image from "next/image";
import { createPortal } from "react-dom";

const backdropVariants: Variants = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
	},
	exit: { opacity: 0 },
};

export default function ImageModal() {
	const { modal, closeModal } = useModal();

	// if (!modal) return null;

	return createPortal(
		<AnimatePresence>
			{modal && (
				<>
					<motion.div
						onClick={closeModal}
						variants={backdropVariants}
						initial="initial"
						animate="animate"
						exit="exit"
						className="fixed inset-0 z-99 bg-black/50 supports-backdrop-filter:backdrop-blur-md cursor-zoom-out"
					/>
					<div
						onClick={closeModal}
						className="fixed inset-0 z-99 flex items-center justify-center px-8 lg:px-0 cursor-zoom-out"
					>
						<motion.div
							layoutId={modal.layoutId}
							variants={backdropVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							className="relative w-full aspect-[1.675] rounded-[10px] overflow-clip lg:max-w-[75vw] 2xl:max-w-250 select-none"
						>
							<Image
								src={modal.src}
								alt={modal.alt ?? "Image"}
								fill
								loading="eager"
								priority
								className="object-cover"
							/>
						</motion.div>
					</div>
				</>
			)}
		</AnimatePresence>,
		document.body,
	);
}
