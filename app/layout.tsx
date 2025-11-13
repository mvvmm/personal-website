import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "@/components/theme-toggle";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "%s | Vance Morrison",
		default: "Vance Morrison",
	},
	description:
		"Sr Staff Software Engineer | Next.js, React, TypeScript | UI/UX, Performance, Modern Web",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider attribute="class" disableTransitionOnChange>
					<div className="min-h-screen px-6 py-8 sm:py-12 md:py-24 sm:px-8 max-w-2xl mx-auto">
						<header className="mb-16">
							<div className="flex justify-between items-center mb-16">
								<h1 className="text-5xl font-medium tracking-tight">Vance Morrison</h1>
								<ThemeToggle />
							</div>
							<Navbar />
						</header>

						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
