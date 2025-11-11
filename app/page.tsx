import Photo from "@/components/photo";

export default function Home() {
	return (
		<>
			<p className="leading-7 [&:not(:first-child)]:mt-6 mb-16">
				Hi, I’m Vance — a creator and technical leader focused on building
				products that connect design, technology, and people. I lead teams and
				projects with a balance of creative vision and engineering precision,
				shaping ideas into scalable, meaningful experiences. My work bridges
				design and development to bring clarity, cohesion, and craft to every
				product I build.
			</p>
			<div className="flex justify-center">
				<Photo />
			</div>
		</>
	);
}
