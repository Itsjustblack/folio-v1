import ArticlesSection from "../sections/home/articles-section";
import HeroSection from "../sections/home/hero-section";
import WorksSection from "../sections/home/works-section";

export default function Home() {
	return (
		<div className="mt-7.5">
			<HeroSection />
			<WorksSection />
			<ArticlesSection />
		</div>
	);
}
