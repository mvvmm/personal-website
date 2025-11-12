import type { Metadata } from "next";
import Love from "@/components/love";
import Photo from "@/components/photo";
import Link from "next/link";

export const metadata: Metadata = {
	title: "About",
	description:
		"Software engineer with a knack for the front-end, currently based in DFW, Texas. Former founding engineer and front-end lead at ProService Hawaii. Building things that feel good to use and stand the test of time.",
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
	},
	openGraph: {
		images: [`${process.env.NEXT_PUBLIC_BASE_URL}/api/og?page=About`],
	},
};

export default function Page() {
	return (
		<section>
			<div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-6">
				About
			</div>
			<div className="prose prose-neutral dark:prose-invert max-w-none">
				<div className="flex justify-center sm:flex-none sm:float-right sm:ml-6 mb-4">
					<Photo />
				</div>
				<p>
					Hi, I&#39;m Vance — I <Love /> building software.
				</p>
				<p>
					I'm a software engineer with a knack for the front-end, currently
					based in DFW, Texas. Most recently, I was a founding engineer and
					front-end lead at{" "}
					<Link
						href="https://www.proservice.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						ProService Hawaii
					</Link>
					, the largest Professional Employer Organization in Hawaii. I
					established the foundational architecture, development processes, and
					best practices for the engineering organization. I led the effort to
					build a performant, accessible design system and designed a
					multi-application SSO authentication flow that simplified the login
					experience for customers. We created what I believe is the best PEO
					software in Hawaii.
				</p>
				<p>
					I got my start building software at{" "}
					<Link
						href="https://www.rpiforge.dev/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						The Forge
					</Link>
					, the maker space on campus at RPI, where I built a{" "}
					<Link
						href="https://www.rpiforge.dev/status"
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						real-time status viewer
					</Link>{" "}
					for all the machinery in the forge, where students can remotely see
					which machines are in use and when they'll be available. Students
					still use it today.
				</p>
				<p>
					After that, I worked at the Lighting Research Center at RPI as the
					lead engineer. We got bought out by Mount Sinai, and I continued
					building software that helped some of the largest lighting companies
					in the world better produce healthy lighting. I built the{" "}
					<Link
						href="https://cscalc.light-health.org/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						CS Calculator (2.0)
					</Link>
					, an online lighting calculator, along with its{" "}
					<Link
						href="https://docs.light-health.org/cscalc"
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						documentation site
					</Link>
					, amongst other internal tools. It was a unique intersection of code
					and science that allowed me to put my physics major and software
					engineering major together in practice
				</p>
				<p>
					From there, I moved to{" "}
					<Link
						href="https://www.joinstatus.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						Statusphere
					</Link>
					, where I worked on scaling a platform connecting hundreds of brands
					with tens of thousands of creators. I led an engineering effort to
					rebrand the application, creating something modern, beautiful,
					accessible, and clean. I got to learn what a small passionate team
					could accomplish in an efficient startup environment.
				</p>
				<p>
					At{" "}
					<Link
						href="https://www.cision.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						Cision
					</Link>
					, I served as Frontend Lead on Connectively/HARO, a web application
					connecting journalists with subject matter experts. We built it from
					the ground up in one quarter, and it quickly gained 25,000+ users in
					the following months. The product was later acquired by{" "}
					<Link
						href="https://www.featured.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-foreground underline hover:no-underline"
					>
						Featured.com
					</Link>
					. I got to lead front-end teams across multiple efforts and also led
					the organization's "Frontend Engineering Club," mentoring rising
					engineers. My experience at Cision taught me how to navigate the
					complexities of large organizations and cut through bureaucracy to
					make real impact.
				</p>
				<p>
					These days, I&#39;m focused on building things that feel good to use
					and stand the test of time. I care about craft, clarity, and the small
					details that make software feel effortless—grounded in how people
					actually use and experience it.
				</p>
			</div>
		</section>
	);
}
