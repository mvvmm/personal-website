import { ImageResponse } from "next/og";
import { generateOpengraphImage } from "@/components/opengraph-image";

export const runtime = "nodejs";
export const alt = "Vance Morrison - About";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function Image() {
	try {
		const { element, options } = await generateOpengraphImage({
			pageName: "About",
			nameOnly: false,
		});
		return new ImageResponse(element, options);
	} catch (e: unknown) {
		console.log(`${e}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
