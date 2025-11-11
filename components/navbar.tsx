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
		<nav aria-label="Main navigation">
			<ul className="flex gap-4 list-none">
				<li>
					<Link
						href="/"
						className={linkClass("/")}
						aria-current={pathname === "/" && "page"}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						className={linkClass("/about")}
						aria-current={pathname === "/about" && "page"}
					>
						About
					</Link>
				</li>
				<li>
					<Link
						href="/experience"
						className={linkClass("/experience")}
						aria-current={pathname === "/experience" && "page"}
					>
						Experience
					</Link>
				</li>
				<li>
					<Link
						href="/contact"
						className={linkClass("/contact")}
						aria-current={pathname === "/contact" && "page"}
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
}
