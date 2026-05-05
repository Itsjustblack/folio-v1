import { Suspense } from "react";
import MusicCarousel from "@/components/music-carousel";
import { getPlaylistTracks } from "@/lib/spotify";
import BeyondCorporateSection from "@/sections/about/beyond-corporate-section";
import ExperienceSection from "@/sections/about/experience-section";
import InfoSection from "@/sections/about/info-section";
import MusicSection from "@/sections/about/music-section";
import TestimonialSection from "@/sections/about/testimonial-section";

async function MusicSectionLoader() {
	const trackImages = await getPlaylistTracks();

	if (!trackImages?.length) return <MusicSection />;
	return (
		<>
			<MusicSection />
			<MusicCarousel tracks={trackImages} />
		</>
	);
}

export default function About() {
	return (
		<div className="pt-52.25">
			<InfoSection />
			<ExperienceSection />
			<BeyondCorporateSection />
			<TestimonialSection />
			<Suspense fallback={<MusicSection />}>
				<MusicSectionLoader />
			</Suspense>
		</div>
	);
}
