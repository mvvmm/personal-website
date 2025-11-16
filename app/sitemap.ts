import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const routes = ["", "/contact", "/experience", "/projects"];

	return routes.map((route) => ({
		url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: route === "" ? 1 : 0.8,
	}));
}
