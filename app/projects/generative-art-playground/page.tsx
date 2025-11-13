import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { GitHub } from "@/components/logos/github";

const title = "Generative Art Playground";
const slug = "generative-art-playground";
const coverImage = "/projects/playground/cover.png";
const otherImages = ["/projects/playground/edit.mp4", "/projects/playground/home.mp4"];

const websiteUrl = "https://www.mvvmm.com";
const githubUrl = "https://github.com/mvvmm/mvvmm.com";

export const metadata: Metadata = {
	title,
	description: `${title}`,
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${slug}`,
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
						<video
							src="/projects/playground/edit.mp4"
							controls
							className="w-full h-auto rounded-lg"
							playsInline
							muted
							loop
						>
							Your browser does not support the video tag.
						</video>
					</div>

					<p className="mb-4">
						I've always been inspired by software like{" "}
						<Link
							href="https://p5js.org/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground underline hover:no-underline"
						>
							p5.js
						</Link>{" "}
						and{" "}
						<Link
							href="https://ojack.xyz"
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground underline hover:no-underline"
						>
							ojack's
						</Link>{" "}
						<Link
							href="https://hydra.ojack.xyz"
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
						<video
							src="/projects/playground/home.mp4"
							controls
							className="w-full h-auto rounded-lg"
							playsInline
							muted
							loop
						>
							Your browser does not support the video tag.
						</video>
					</div>

					<p className="mb-4">
						You can try it out at{" "}
						<Link
							href="https://www.mvvmm.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground underline hover:no-underline"
						>
							mvvmm.com
						</Link>{" "}
						and explore the code on{" "}
						<Link
							href="https://github.com/mvvmm/mvvmm.com"
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
