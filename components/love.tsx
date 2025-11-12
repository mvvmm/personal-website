"use client";

import { useState, useRef, useEffect } from "react";

interface Heart {
	id: number;
	startX: number;
	startY: number;
	size: number;
	swayAmplitude: number;
	swayFrequency: number;
	rotationSpeed: number;
	initialRotation: number;
	startTime: number;
}

export default function Love() {
	const [hearts, setHearts] = useState<Heart[]>([]);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const animationFrameRef = useRef<number | undefined>(undefined);

	useEffect(() => {
		if (hearts.length === 0) return;

		const animate = () => {
			setHearts((prevHearts) => [...prevHearts]);
			animationFrameRef.current = requestAnimationFrame(animate);
		};

		animationFrameRef.current = requestAnimationFrame(animate);

		return () => {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, [hearts.length]);

	useEffect(() => {
		const cleanup = setInterval(() => {
			setHearts((prevHearts) => {
				const now = performance.now();
				return prevHearts.filter(
					(heart) => (now - heart.startTime) / 1000 < 2.1,
				);
			});
		}, 100);

		return () => clearInterval(cleanup);
	}, []);

	const createHearts = () => {
		if (!buttonRef.current) return;

		const rect = buttonRef.current.getBoundingClientRect();
		const baseX = rect.left + rect.width / 2;
		const baseY = rect.top + rect.height / 2;

		const newHearts: Heart[] = Array.from({ length: 5 }, (_, i) => ({
			id: Date.now() + i,
			startX: baseX + (Math.random() - 0.5) * 80,
			startY: baseY + (Math.random() - 0.5) * 60,
			size: 0.8 + Math.random() * 0.4,
			swayAmplitude: 10 + Math.random() * 30,
			swayFrequency: 2 + Math.random() * 3,
			rotationSpeed: 1.5 + Math.random() * 2,
			initialRotation: (Math.random() - 0.5) * 60,
			startTime: performance.now(),
		}));

		setHearts((prev) => [...prev, ...newHearts]);
	};

	const handleLoveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		createHearts();
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			createHearts();
		}
	};

	return (
		<>
			<button
				type="button"
				ref={buttonRef}
				onClick={handleLoveClick}
				onKeyDown={handleKeyDown}
				className="cursor-pointer transition-colors inline-block bg-transparent border-none p-0 font-inherit text-inherit"
				aria-label="Click to release hearts"
			>
				&lt;love&gt;
			</button>

			{hearts.map((heart) => {
				const elapsed = (performance.now() - heart.startTime) / 1000;
				if (elapsed >= 2) return null;

				const progress = elapsed / 2;
				const easeOut = 1 - Math.pow(1 - progress, 3);
				const yOffset = -100 * easeOut;
				const swayX =
					Math.sin(elapsed * heart.swayFrequency) * heart.swayAmplitude;
				const rotation =
					heart.initialRotation + Math.sin(elapsed * heart.rotationSpeed) * 15;
				const scale = heart.size * (1 + easeOut * 0.5);
				const opacity = 1 - progress;

				return (
					<span
						key={heart.id}
						className="fixed pointer-events-none text-red-500 z-50 dark:invert"
						style={{
							left: `${heart.startX + swayX}px`,
							top: `${heart.startY + yOffset}px`,
							transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
							opacity: opacity,
							fontSize: `${1.5 * heart.size}rem`,
						}}
					>
						🖤
					</span>
				);
			})}
		</>
	);
}
