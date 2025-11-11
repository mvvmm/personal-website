import Image from "next/image";

const IMAGE_OUT_WIDTH = 200;
const ORIGINAL_IMAGE_WIDTH = 600;
const ORIGINAL_IMAGE_HEIGHT = 600;

const IMAGE_OUTPUT_SCALE = IMAGE_OUT_WIDTH / ORIGINAL_IMAGE_WIDTH;

export default function Photo() {
	return (
		<div
			className="rounded-full bg-slate-400 dark:bg-slate-600"
			style={{
				width: `${ORIGINAL_IMAGE_WIDTH * IMAGE_OUTPUT_SCALE}px`,
				height: `${ORIGINAL_IMAGE_WIDTH * IMAGE_OUTPUT_SCALE}px`,
			}}
		>
			<Image
				className="rounded-full"
				style={{
					width: `${ORIGINAL_IMAGE_WIDTH * IMAGE_OUTPUT_SCALE}px`,
					height: `${ORIGINAL_IMAGE_WIDTH * IMAGE_OUTPUT_SCALE}px`,
				}}
				src="/vance-morrison.png"
				alt="Vance Morrison"
				width={ORIGINAL_IMAGE_WIDTH}
				height={ORIGINAL_IMAGE_HEIGHT}
				preload={true}
			/>
		</div>
	);
}
