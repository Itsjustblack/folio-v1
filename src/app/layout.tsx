import type { Metadata } from "next";
import "./globals.css";
import "dialkit/styles.css";
import Providers from "../providers/providers";
import NavBar from "../components/navbar";
import Footer from "../components/layout/footer";
import VinylMusic from "../components/vinyl-music";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
		<html lang="en" className={cn("font-sans", geist.variable)}>
			<body>
				<Providers>
					<main className="min-h-dvh mt-7.5">
						<NavBar />
						{children}
						<Footer />
						<VinylMusic />
					</main>
				</Providers>
			</body>
		</html>
	);
}
