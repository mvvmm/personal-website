"use client";

import Link from "next/link";
import { Copy as CopyIcon, Check as CheckIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
								className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
							>
								{contactItem.display}
							</Link>
							{contactItem.copy && (
								<Copy copyText={contactItem.copyText ?? ""} />
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

const Copy = ({ copyText }: { copyText: string }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(copyText);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy text:", err);
		}
	};

	return (
		<Button
			type="button"
			variant="ghost"
			size="icon-sm"
			onClick={handleCopy}
			aria-label="Copy text"
		>
			{copied ? (
				<CheckIcon className="text-green-600 dark:text-green-400" />
			) : (
				<CopyIcon />
			)}
		</Button>
	);
};
