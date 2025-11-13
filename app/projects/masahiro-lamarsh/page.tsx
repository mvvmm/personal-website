import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { Instagram } from "@/components/logos/instagram";

const title = "Masahiro Lamarsh";
const slug = "masahiro-lamarsh";
const websiteUrl = "https://www.masahirolamarsh.com/";
const instagramUrl = "https://www.instagram.com/hirolamarsh/";

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
						aria-label="Visit Masahiro LaMarsh website"
					>
						<Globe className="w-5 h-5" />
					</Link>
					<Link
						href={instagramUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center w-10 h-10 rounded-full border hover:border-foreground"
						aria-label="Visit Masahiro LaMarsh Instagram"
					>
						<Instagram className="w-5 h-5" />
					</Link>
				</div>

				{/* Cover Image */}
				<div className="mb-12">
					<Image
						src="/projects/masa/cover.png"
						alt={title}
						width={1000}
						height={600}
						className="w-full h-auto rounded-lg"
						priority
					/>
				</div>

				{/* Content */}
				<div className="mb-12">
					<p className="mb-4">
						I've had the pleasure of working with legendary NYC jeweler{" "}
						<Link
							href={instagramUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground underline hover:no-underline"
						>
							Masahiro LaMarsh
						</Link>{" "}
						over the years, building web solutions to showcase his work and help document his
						portfolio.
					</p>

					<p className="mb-4">One of the first projects we created was an archive of his pieces.</p>

					{/* First image after second paragraph */}
					<div className="my-12">
						<Image
							src="/projects/masa/archive.png"
							alt="Masahiro Lamarsh - Archive"
							width={1200}
							height={800}
							className="w-full h-auto rounded-lg"
						/>
					</div>

					<p className="mb-4">I also built systems for running live auctions for his pieces.</p>

					<div className="my-12">
						<Image
							src="/projects/masa/bid-1.png"
							alt="Masahiro Lamarsh - bid interface"
							width={1200}
							height={800}
							className="w-full h-auto rounded-lg"
						/>
					</div>

					<div className="my-12">
						<Image
							src="/projects/masa/bid-2.png"
							alt="Masahiro Lamarsh - bid interface piece closeup"
							width={1200}
							height={800}
							className="w-full h-auto rounded-lg"
						/>
					</div>

					<p className="mb-4">
						We've since paused development on the site, but you can still reach it at{" "}
					</p>

					<Link
						href={websiteUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						masahirolamarsh.com
					</Link>
				</div>
			</article>
		</section>
	);
}
