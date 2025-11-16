"use client";

import { useEffect } from "react";

export function AsciiArt() {
	useEffect(() => {
		const asciiArt = `
███╗   ███╗██╗   ██╗███╗   ███╗
████╗ ████║██║   ██║████╗ ████║
██╔████╔██║╚██╗ ██╔╝██╔████╔██║
██║╚██╔╝██║ ╚████╔╝ ██║╚██╔╝██║
██║ ╚═╝ ██║  ╚██╔╝  ██║ ╚═╝ ██║
╚═╝     ╚═╝   ╚═╝   ╚═╝     ╚═╝
`;
		console.log(asciiArt);
	}, []);

	return null;
}

