"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MoonStar, Sun } from "lucide-react";

export function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	};

	return (
		<Button
			aria-label="Toggle theme"
			className="rounded-full"
			variant="ghost"
			size="icon-xl"
			onClick={toggleTheme}
		>
			<Sun className="scale-100 dark:scale-0" />
			<MoonStar className="absolute scale-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
