import { type Config } from "tailwindcss"

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: ["light", "dark"],
	},
	plugins: [require("daisyui")],
	safelist: [
		{
			pattern:
				/(alert|btn|text)-(primary|secondary|neutral|error|success|warning)/,
		},
		{
			pattern: /btn-(lg|sm|xs)/,
		},
	],
} satisfies Config
