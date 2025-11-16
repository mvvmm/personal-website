"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
	{
		label: "About",
		href: "/",
	},
	{
		label: "Experience",
		href: "/experience",
	},
	{
		label: "Projects",
		href: "/projects",
	},
	{
		label: "Contact",
		href: "/contact",
	},
];

export default function Navbar() {
	const pathname = usePathname();

	const isActive = (path: string) =>
		pathname === path || (path === "/projects" && pathname.startsWith("/projects"));

	const linkClass = (path: string) =>
		cn(
			"font-bold transition-colors duration-300 text-sm",
			isActive(path) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
		);

	return (
		<nav aria-label="Main navigation">
			<ul className="flex gap-4 list-none">
				{navItems.map((item) => (
					<li key={item.href}>
						<Link
							href={item.href}
							className={linkClass(item.href)}
							aria-current={isActive(item.href) ? "page" : undefined}
						>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
