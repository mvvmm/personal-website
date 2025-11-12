/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const size = {
	width: 32,
	height: 32,
};
export const contentType = "image/png";

export default async function Icon() {
	try {
		// Load Geist font for the icon
		const fontDir = join(
			process.cwd(),
			"node_modules",
			"geist",
			"dist",
			"fonts",
			"geist-sans",
		);

		const geistFont = readFileSync(join(fontDir, "Geist-Medium.ttf"));

		return new ImageResponse(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#000000",
					fontFamily: "Geist",
					borderRadius: "50%",
				}}
			>
				<div
					style={{
						fontSize: "20px",
						fontWeight: "500",
						color: "#ffffff",
					}}
				>
					V
				</div>
			</div>,
			{
				...size,
				fonts: [
					{
						name: "Geist",
						data: geistFont,
						style: "normal",
						weight: 500,
					},
				],
			},
		);
	} catch (e: unknown) {
		console.log(`Failed to generate icon: ${e}`);
		// Return a simple fallback
		return new ImageResponse(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#000000",
					fontSize: "20px",
					fontWeight: "500",
					color: "#ffffff",
					borderRadius: "50%",
				}}
			>
				V
			</div>,
			{
				...size,
			},
		);
	}
}
