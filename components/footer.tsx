import Link from "next/link";
import { personalLinks } from "@/lib/links";

export default function Footer() {
	return (
		<footer className="mt-auto pt-16 flex justify-between text-xs text-center text-muted-foreground text-mono">
			<div>
				Vance Morrison (
				<Link
					className="text-foreground underline hover:no-underline"
					href={personalLinks.github}
					target="_blank"
					rel="noopener noreferrer"
				>
					mvm
				</Link>
				)
			</div>
			<div>
				<Link
					className="text-foreground underline hover:no-underline"
					href={personalLinks.githubSource}
					target="_blank"
					rel="noopener noreferrer"
				>
					Source
				</Link>
			</div>
		</footer>
	);
}
