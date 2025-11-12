"use client";

import { Copy as CopyIcon, Check as CheckIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CopyButton({ copyText }: { copyText: string }) {
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
}

