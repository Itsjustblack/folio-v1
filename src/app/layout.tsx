import { cn } from "@/lib/utils";
import TanstackQueryProvider from "@/providers/tanstack-query-provider";
import ThemeProvider from "@/providers/theme-provider";
import { DialRoot } from "dialkit";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Footer from "../components/layout/footer";
import NavBar from "../components/navbar";
import VinylMusic from "../components/vinyl-music";
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
				<main className="min-h-dvh">
					<TanstackQueryProvider>
						<ThemeProvider>
							<NavBar />
							{children}
							<Footer />
							<VinylMusic />
							<DialRoot />
						</ThemeProvider>
					</TanstackQueryProvider>
				</main>
			</body>
		</html>
	);
}
