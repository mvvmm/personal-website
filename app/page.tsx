import type { Metadata } from "next";

export const metadata: Metadata = {
	description:
		"Software engineer with a knack for the front-end, currently based in DFW, Texas. Building things that feel good to use and stand the test of time.",
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
	},
	openGraph: {
		images: [`${process.env.NEXT_PUBLIC_BASE_URL}/api/og?page=Home`],
	},
};

export default function Home() {
	return <>Home</>;
}
