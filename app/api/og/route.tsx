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

		// Load all Geist font weights from node_modules
		const fontDir = join(
			process.cwd(),
			"node_modules",
			"geist",
			"dist",
			"fonts",
			"geist-sans",
		);

		const geistFonts = [
			{
				name: "Geist-UltraLight",
				weight: 200 as const,
				file: "Geist-UltraLight.ttf",
			},
			{ name: "Geist-Thin", weight: 100 as const, file: "Geist-Thin.ttf" },
			{ name: "Geist-Light", weight: 300 as const, file: "Geist-Light.ttf" },
			{
				name: "Geist-Regular",
				weight: 400 as const,
				file: "Geist-Regular.ttf",
			},
			{ name: "Geist-Medium", weight: 500 as const, file: "Geist-Medium.ttf" },
			{
				name: "Geist-SemiBold",
				weight: 600 as const,
				file: "Geist-SemiBold.ttf",
			},
			{ name: "Geist-Bold", weight: 700 as const, file: "Geist-Bold.ttf" },
			{ name: "Geist-Black", weight: 900 as const, file: "Geist-Black.ttf" },
			{
				name: "Geist-UltraBlack",
				weight: 900 as const,
				file: "Geist-UltraBlack.ttf",
			},
		].map((font) => ({
			name: "Geist",
			data: readFileSync(join(fontDir, font.file)),
			style: "normal" as const,
			weight: font.weight as
				| 100
				| 200
				| 300
				| 400
				| 500
				| 600
				| 700
				| 800
				| 900,
		}));

		// Load photo image
		const photoPath = join(process.cwd(), "public", "vance-morrison.png");
		const photoData = readFileSync(photoPath);
		const photoBase64 = `data:image/png;base64,${photoData.toString("base64")}`;

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
					fontFamily: "Geist",
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
			</div>,
			{
				width: 1200,
				height: 630,
				fonts: geistFonts,
			},
		);
	} catch (e: unknown) {
		console.log(`${e}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
