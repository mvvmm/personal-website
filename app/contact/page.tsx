import type { Metadata } from "next";
import Link from "next/link";
import CopyButton from "@/components/copy-button";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Get in touch with Vance Morrison. Contact via email, LinkedIn, or GitHub.",
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
	},
};

const contactItems = [
	{
		label: "Email",
		display: "root.mvm@gmail.com",
		url: "mailto:root.mvm@gmail.com",
		copy: true,
		copyText: "root.mvm@gmail.com",
	},
	{
		label: "LinkedIn",
		display: "vancemorrison",
		url: "https://www.linkedin.com/in/vancemorrison/",
		copy: false,
	},
	{
		label: "GitHub",
		display: "mvvmm",
		url: "https://github.com/mvvmm",
		copy: false,
	},
];

export default function Page() {
	return (
		<section>
			<div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-6">
				Contact
			</div>
			<div className="flex flex-col gap-6">
				{contactItems.map((contactItem) => (
					<div key={contactItem.label}>
						<p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
							{contactItem.label}
						</p>
						<div className="flex items-center gap-2">
							<Link
								href={contactItem.url}
								className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300 underline"
							>
								{contactItem.display}
							</Link>
							{contactItem.copy && (
								<CopyButton copyText={contactItem.copyText ?? ""} />
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
