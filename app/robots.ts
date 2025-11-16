import type { MetadataRoute } from "next";
import { allRoutes, routes } from "@/lib/routes";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: [...allRoutes, "/api/og/*"],
			},
		],
		sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
	};
}
