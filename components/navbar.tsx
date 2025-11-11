"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
	const pathname = usePathname();

	const linkClass = (path: string) =>
		cn(
			"font-bold transition-colors duration-300 text-sm",
			pathname === path
				? "text-foreground"
				: "text-muted-foreground hover:text-foreground",
		);

	return (
		<nav className="flex gap-4">
			<Link href="/" className={linkClass("/")}>
				Home
			</Link>
			<Link href="/about" className={linkClass("/about")}>
				About
			</Link>
			<Link href="/experience" className={linkClass("/experience")}>
				Experience
			</Link>
		</nav>
	);
}
