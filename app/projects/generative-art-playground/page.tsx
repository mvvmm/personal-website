import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { GitHub } from "@/components/logos/github";
import { projectLinks, externalLinks } from "@/lib/links";
import { projectSlugs, getProjectRoute } from "@/lib/routes";

const title = "Generative Art Playground";
const slug = projectSlugs.generativeArtPlayground;
const coverImage = "/projects/playground/cover.png";
const websiteUrl = projectLinks.generativeArtPlayground.website;
const githubUrl = projectLinks.generativeArtPlayground.github;

export const metadata: Metadata = {
	title,
	description: `${title}`,
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${getProjectRoute(slug)}`,
	},
};

export default function Page() {
	return (
		<section>
			<article className="prose prose-neutral dark:prose-invert max-w-none">
				<h1 className="text-4xl font-medium tracking-tight mb-8">{title}</h1>

				{/* Icon Buttons */}
				<div className="flex gap-4 mb-8">
					<Link
						href={websiteUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center w-10 h-10 rounded-full border hover:border-foreground"
						aria-label="Visit Generative Art Playground website"
					>
						<Globe className="w-5 h-5" />
					</Link>
					<Link
						href={githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center w-10 h-10 rounded-full border hover:border-foreground"
						aria-label="View Generative Art Playground on GitHub"
					>
						<GitHub className="w-5 h-5" />
					</Link>
				</div>

				{/* Cover Image */}
				<div className="mb-12">
					<Image
						src={coverImage}
						alt={title}
						width={1000}
						height={600}
						className="w-full h-auto rounded-lg"
						preload
					/>
				</div>

				<div className="mb-12">
					<p className="mb-4">
						I'm building a generative art playground, for lack of a better name, where you can edit
						the code of generative art experiences in real time, and see the results instantly. It's
						a space for experimentation, learning, and creating visual art through code.
					</p>

					<div className="my-12">
						<Image
							src="/projects/playground/edit.png"
							alt={title}
							width={3172}
							height={1998}
							className="w-full h-auto rounded-lg"
							preload
						/>
					</div>

					<p className="mb-4">
						I've always been inspired by software like{" "}
						<Link
							href={externalLinks.p5js}
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground underline hover:no-underline"
						>
							p5.js
						</Link>{" "}
						and{" "}
						<Link
							href={externalLinks.ojack}
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground underline hover:no-underline"
						>
							ojack's
						</Link>{" "}
						<Link
							href={externalLinks.hydra}
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground underline hover:no-underline"
						>
							hydra
						</Link>{" "}
						. I wanted to take a stab at combining ideas from both, while continuing to add features
						that make it feel unique to me.
					</p>

					<div className="my-12">
						<Image
							src="/projects/playground/home.png"
							alt={title}
							width={3150}
							height={1924}
							className="w-full h-auto rounded-lg"
							preload
							quality={50}
						/>
					</div>

					<p className="mb-4">
						You can try it out at{" "}
						<Link
							href={projectLinks.generativeArtPlayground.website}
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground underline hover:no-underline"
						>
							mvvmm.com
						</Link>{" "}
						and explore the code on{" "}
						<Link
							href={projectLinks.generativeArtPlayground.github}
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
