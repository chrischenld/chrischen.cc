import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontSize: {
			xs: "0.75rem",
			sm: "0.875rem",
			base: "1rem",
			xl: "1.25rem",
			"2xl": "1.563rem",
			"3xl": "1.953rem",
			"4xl": "2.441rem",
			"5xl": "3.052rem",
		},
		extend: {
			height: {
				"128": "32rem",
				"144": "36rem",
			},
			fontFamily: {
				fragmentMono: ["var(--font-fragment-mono)"],
				pantasia: ["var(--font-pantasia)"],
			},
		},
		screens: {
			sm: "300px",
			// => @media (min-width: 640px) { ... }

			md: "600px",
			// => @media (min-width: 768px) { ... }

			lg: "960px",
			// => @media (min-width: 1024px) { ... }

			// xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			// "2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [],
};
export default config;
