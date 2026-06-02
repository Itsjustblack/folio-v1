import ImageModal from "@/components/image-modal-client";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { DeckProvider } from "@/providers/deck-provider";
import { ModalProvider } from "@/providers/modal-provider";
import { AudioProvider } from "@/providers/audio-provider";
import TanstackQueryProvider from "@/providers/tanstack-query-provider";
import ThemeProvider from "@/providers/theme-provider";
// import { DialRoot } from "dialkit";
import VinylMusic from "@/components/vinyl-music";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Personal portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn("font-sans", geist.variable)}
		>
			<body>
				<TanstackQueryProvider>
					<ThemeProvider>
						<AudioProvider>
							<ModalProvider>
								<DeckProvider>
									<TooltipProvider>
										{children}
										<VinylMusic />
										{/* <DialRoot /> */}
										<Suspense fallback={null}>
											<ImageModal />
										</Suspense>
									</TooltipProvider>
								</DeckProvider>
							</ModalProvider>
						</AudioProvider>
					</ThemeProvider>
				</TanstackQueryProvider>
			</body>
		</html>
	);
}
