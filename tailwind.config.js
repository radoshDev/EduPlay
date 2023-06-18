/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				"auto-fit-250": "repeat( auto-fit, minmax(250px, 1fr))",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
	safelist: [
		{ pattern: /bg-(red|green|blue|gray|yellow)-(100|500|700)/, variants: ["hover", "focus"] },
		{ pattern: /text-(red|green|blue|gray|yellow)-(500|700)/, variants: ["hover", "focus"] },
	],
}
