/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const pageName = searchParams.get("page") || "Home";
		const name = "Vance Morrison";

		// Load only the Geist font weights we actually use (400 and 500)
		// with error handling for production environments
		const geistFonts = [];
		try {
			const fontDir = join(
				process.cwd(),
				"node_modules",
				"geist",
				"dist",
				"fonts",
				"geist-sans",
			);

			const fontsToLoad = [
				{ weight: 400 as const, file: "Geist-Regular.ttf" },
				{ weight: 500 as const, file: "Geist-Medium.ttf" },
			];

			for (const font of fontsToLoad) {
				try {
					const fontData = readFileSync(join(fontDir, font.file));
					geistFonts.push({
						name: "Geist",
						data: fontData,
						style: "normal" as const,
						weight: font.weight,
					});
				} catch (fontError) {
					console.warn(`Failed to load font ${font.file}:`, fontError);
				}
			}
		} catch (fontDirError) {
			console.warn("Font directory not found, using system fonts:", fontDirError);
		}

		// Load photo image with error handling
		let photoBase64: string | undefined;
		try {
			const photoPath = join(process.cwd(), "public", "vance-morrison.png");
			const photoData = readFileSync(photoPath);
			photoBase64 = `data:image/png;base64,${photoData.toString("base64")}`;
		} catch (photoError) {
			console.warn("Failed to load photo, image will render without it:", photoError);
		}

		return new ImageResponse(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "row",
					alignItems: "flex-end",
					justifyContent: "space-between",
					backgroundColor: "#000000",
					padding: "80px",
					position: "relative",
					fontFamily: geistFonts.length > 0 ? "Geist" : "system-ui, -apple-system, sans-serif",
				}}
			>
				{/* Triangle icon in top-left */}
				<div
					style={{
						position: "absolute",
						top: "80px",
						left: "80px",
						width: "0",
						height: "0",
						borderLeft: "12px solid transparent",
						borderRight: "12px solid transparent",
						borderBottom: "20px solid #ffffff",
					}}
				/>

				{/* Main content */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						flex: "1",
						marginRight: "60px",
					}}
				>
					{/* Page name in large font */}
					<div
						style={{
							fontSize: "120px",
							fontWeight: "500",
							color: "#ffffff",
							lineHeight: "1",
							marginBottom: "24px",
							letterSpacing: "-0.02em",
						}}
					>
						{pageName}
					</div>

					{/* Divider line */}
					<div
						style={{
							width: "100%",
							height: "1px",
							backgroundColor: "#404040",
							marginBottom: "24px",
						}}
					/>

					{/* Name in smaller font */}
					<div
						style={{
							fontSize: "32px",
							fontWeight: "400",
							color: "#ffffff",
							opacity: 0.8,
						}}
					>
						{name}
					</div>
				</div>

				{/* Photo on the right */}
				{photoBase64 && (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							alignSelf: "center",
						}}
					>
						<img
							src={photoBase64}
							alt="Vance Morrison"
							width={350}
							height={350}
							style={{
								borderRadius: "50%",
								filter: "grayscale(100%) contrast(125%)",
							}}
						/>
					</div>
				)}
			</div>,
			{
				width: 1200,
				height: 630,
				...(geistFonts.length > 0 && { fonts: geistFonts }),
			},
		);
	} catch (e: unknown) {
		console.log(`${e}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
