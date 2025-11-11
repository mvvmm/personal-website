import Photo from "@/components/photo";

export default function Page() {
	return (
		<section>
			<div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-6">
				About
			</div>
			<p className="leading-7 [&:not(:first-child)]:mt-6 mb-16 prose">
				Hi, I'm Vance — an engineer and technical leader focused on building
				products that connect design, engineering, and product. I lead teams and
				projects with a balance of creative vision and engineering precision,
				shaping ideas into scalable, meaningful experiences. My work bridges
				design and development to bring clarity, cohesion, and craft to every
				product I build.
			</p>
			<div className="flex justify-center">
				<Photo />
			</div>
		</section>
	);
}
