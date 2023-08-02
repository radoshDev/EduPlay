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
				/(alert|btn|text|ring|badge)-(primary|secondary|neutral|error|success|warning)/,
		},
		{
			pattern: /(btn|badge)-(lg|sm|xs)/,
		},
		"w-[40px]",
		"w-[60px]",
		"w-[80px]",
		"w-[100px]",
	],
} satisfies Config
