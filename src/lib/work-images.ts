export const WORK_IMAGES: Record<string, { src: string; alt: string }> = {
	"remita/hero": { src: "/remita.jpg", alt: "Remita — hero" },
	"remita/role": { src: "/remita.jpg", alt: "Remita — my role" },
	"remita/goal": { src: "/remita.jpg", alt: "Remita — end goal" },
	"clusteer/hero": { src: "/bg-clusteer.png", alt: "Clusteer — hero" },
	"omnikaido/hero": { src: "/bg-omnikaido.png", alt: "Omnikaido — hero" },
	"bellpay/hero": { src: "/bg-bellpay.png", alt: "BellPay — hero" },
};

export function getWorkImage(slug: string, image: string) {
	return WORK_IMAGES[`${slug}/${image}`];
}
