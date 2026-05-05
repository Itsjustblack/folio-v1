"use client";

import { Suspense } from "react";
import FolderDemo from "./demo/folder-demo";

export default function PreviewDemo() {
	return (
		<div className="relative flex aspect-[1.675] w-full items-center justify-center rounded-[10px] border-2 border-[oklch(0.909_0_0)] bg-[oklch(0.988_0_0)]">
			<Suspense fallback={null}>
				<FolderDemo />
			</Suspense>
		</div>
	);
}
