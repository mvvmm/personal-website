import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Projects",
	description:
		"Selected projects including Masahiro Lamarsh, Omnibin, and Generative Art Playground.",
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
	},
};

const projects = [
	{ slug: "omnibin", title: "omnib.in", coverImage: "/projects/omnibin/cover.png" },
	{ slug: "masahiro-lamarsh", title: "Masahiro Lamarsh", coverImage: "/projects/masa/cover.png" },
	{
		slug: "generative-art-playground",
		title: "Generative Art Playground",
		coverImage: "/projects/playground/cover.png",
	},
];

export default function Page() {
	return (
		<section>
			<div className="flex flex-col gap-12">
				{projects.map((project) => {
					return (
						<Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
							<div className="mb-4">
								<Image
									src={project.coverImage}
									alt={project.title}
									width={1000}
									height={600}
									className="w-full h-auto rounded-lg transition-opacity group-hover:opacity-80"
								/>
							</div>
							<h2 className="text-xl font-medium text-foreground group-hover:underline">
								{project.title}
							</h2>
						</Link>
					);
				})}
			</div>
			<p className="mt-12 text-sm text-muted-foreground">
				* These are projects I've worked on in my free time. For my professional work, see the{" "}
				<Link href="/experience" className="text-foreground underline hover:no-underline">
					experience
				</Link>{" "}
				and{" "}
				<Link href="/about" className="text-foreground underline hover:no-underline">
					about
				</Link>{" "}
				pages.
			</p>
		</section>
	);
}
