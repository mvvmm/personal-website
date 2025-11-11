import Image from "next/image";

const IMAGE_SIZE = 200;

export default function Photo() {
	return (
		<div
			className="rounded-full bg-neutral-300"
			style={{ width: `${IMAGE_SIZE}px`, height: `${IMAGE_SIZE}px` }}
		>
			<Image
				className="rounded-full"
				style={{ width: `${IMAGE_SIZE}px`, height: `${IMAGE_SIZE}px` }}
				src="/vance-morrison.webp"
				alt="Vance Morrison"
				width={1265}
				height={1219}
			/>
		</div>
	);
}
