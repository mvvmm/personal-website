import Image from "next/image";

const IMAGE_OUTPUT_SIZE = 200;
const ORIGINAL_IMAGE_WIDTH = 633;
const ORIGINAL_IMAGE_HEIGHT = 610;

export default function Photo() {
	return (
		<div
			className="rounded-full bg-neutral-300"
			style={{
				width: `${IMAGE_OUTPUT_SIZE}px`,
				height: `${IMAGE_OUTPUT_SIZE}px`,
			}}
		>
			<Image
				className="rounded-full"
				style={{
					width: `${IMAGE_OUTPUT_SIZE}px`,
					height: `${IMAGE_OUTPUT_SIZE}px`,
				}}
				src="/vance-morrison.webp"
				alt="Vance Morrison"
				width={ORIGINAL_IMAGE_WIDTH}
				height={ORIGINAL_IMAGE_HEIGHT}
				preload={true}
			/>
		</div>
	);
}
