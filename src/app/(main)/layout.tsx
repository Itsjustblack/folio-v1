import Footer from "@/components/layout/footer";
import NavBar from "@/components/navbar";
import { Suspense } from "react";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="min-h-dvh">
			<Suspense>
				<NavBar />
			</Suspense>
			{children}
			<Suspense>
				<Footer />
			</Suspense>
		</main>
	);
}
