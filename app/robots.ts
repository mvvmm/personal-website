import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: ["/", "/api/og/*", "/about", "/experience", "/contact"],
			},
		],
		sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
	};
}
