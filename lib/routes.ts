/**
 * Centralized configuration for all internal routes used throughout the application
 */

// Main Routes
export const routes = {
	home: "/",
	about: "/",
	experience: "/experience",
	projects: "/projects",
	contact: "/contact",
} as const;

// Project Slugs
export const projectSlugs = {
	omnibin: "omnibin",
	masahiroLamarsh: "masahiro-lamarsh",
	generativeArtPlayground: "generative-art-playground",
} as const;

// Helper function to build project route
export function getProjectRoute(slug: string): string {
	return `${routes.projects}/${slug}`;
}

// Navigation Items
export const navItems = [
	{
		label: "About",
		href: routes.home,
	},
	{
		label: "Experience",
		href: routes.experience,
	},
	{
		label: "Projects",
		href: routes.projects,
	},
	{
		label: "Contact",
		href: routes.contact,
	},
] as const;

// All routes for sitemap and robots
export const allRoutes = [routes.home, routes.experience, routes.projects, routes.contact] as const;
