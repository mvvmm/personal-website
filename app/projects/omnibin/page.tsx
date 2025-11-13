import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { Apple } from "@/components/logos/apple";
import { GitHub } from "@/components/logos/github";

const title = "omnib.in";
const slug = "omnibin";
const githubUrl = "https://github.com/mvvmm/omnibin";
const appleUrl = "https://apps.apple.com/us/app/omnibin/id6752793228";
const webUrl = "https://omnib.in";

export const metadata: Metadata = {
	title,
	description: `${title}`,
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${slug}`,
	},
};

export default function ProjectPage() {
	return (
		<section>
			<article className="prose prose-neutral dark:prose-invert max-w-none">
				<h1 className="text-4xl font-medium tracking-tight mb-8">{title}</h1>

				{/* Icon Buttons */}
				<div className="flex gap-4 mb-8">
					<Link
						href={webUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center w-10 h-10 rounded-full border hover:border-foreground"
						aria-label="Visit omnibin website"
					>
						<Globe className="w-5 h-5" />
					</Link>
					<Link
						href={appleUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center w-10 h-10 rounded-full border hover:border-foreground"
						aria-label="View omnibin on the App Store"
					>
						<Apple className="w-5 h-5" />
					</Link>
					<Link
						href={githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center w-10 h-10 rounded-full border hover:border-foreground"
						aria-label="View omnibinon GitHub"
					>
						<GitHub className="w-5 h-5" />
					</Link>
				</div>

				{/* Cover Image */}
				<div className="mb-12">
					<Image
						src="/projects/omnibin/cover.png"
						alt="omnibin - binboy logo"
						width={1000}
						height={600}
						className="w-full h-auto rounded-lg"
						preload
					/>
				</div>

				{/* Content */}
				<div className="mb-12">
					<p className="mb-4">
						I built{" "}
						<Link
							href={webUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground underline hover:no-underline"
						>
							omnib.in
						</Link>{" "}
						to solve a problem I faced constantly: not being able to quickly move content between
						devices. The traditional methods—emailing yourself, uploading to Google Drive, or using
						cloud storage—felt slow and tedious. I wanted something easier.
					</p>
					<div className="my-12">
						<Image
							src="/projects/omnibin/og.png"
							alt="omnibin - promo image"
							width={1200}
							height={630}
							className="w-full h-auto rounded-lg"
							preload
						/>
					</div>

					<p className="mb-4">
						omnibin is a platform where users can copy and paste content between devices
						effortlessly. It's designed to be fast, simple, and reliable. It supports text, images,
						files, and more.
					</p>
					<div className="my-12">
						<Image
							src="/projects/omnibin/bin.png"
							alt="omnibin - bin view"
							width={1692}
							height={1938}
							className="w-full h-auto rounded-lg"
							preload
						/>
					</div>

					<p className="mb-4">
						You can access it through the web at{" "}
						<Link
							href={webUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground underline hover:no-underline"
						>
							omnib.in
						</Link>
						, download the iOS app from the{" "}
						<Link
							href={appleUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground underline hover:no-underline"
						>
							App Store
						</Link>
						, or check out the code on{" "}
						<Link
							href={githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground underline hover:no-underline"
						>
							GitHub
						</Link>
						.
					</p>
				</div>
			</article>
		</section>
	);
}
