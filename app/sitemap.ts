import type { MetadataRoute } from "next";
import { allRoutes, routes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
	return allRoutes.map((route) => ({
		url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: route === routes.home ? 1 : 0.8,
	}));
}
