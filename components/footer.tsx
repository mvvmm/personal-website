import Link from "next/link";

const PERSONAL_GITHUB_URL = "https://github.com/mvvmm";
const SOURCE_GITHUB_URL = "https://github.com/mvvmm/personal-website";

export default function Footer() {
	return (
		<footer className="mt-auto pt-16 flex justify-between text-xs text-center text-muted-foreground text-mono">
			<div>
				Vance Morrison (
				<Link
					className="text-foreground underline hover:no-underline"
					href={PERSONAL_GITHUB_URL}
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
					href={SOURCE_GITHUB_URL}
					target="_blank"
					rel="noopener noreferrer"
				>
					Source
				</Link>
			</div>
		</footer>
	);
}
