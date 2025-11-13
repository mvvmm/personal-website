import type { Metadata } from "next";

export const metadata: Metadata = {
	description: "Vance Morrison's personal website",
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
	},
};

export default function Home() {
	return (
		<>
			<section>
				<div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-6">Home</div>
			</section>
		</>
	);
}
