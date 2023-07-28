await import("./src/env.mjs")

/** @type {import('next').NextConfig} */

import nextPwa from "next-pwa"

const withPWA = nextPwa({
	dest: "public",
	disable: process.env.NODE_ENV === "development",
})

const config = {
	images: {
		remotePatterns: [
			{
				hostname: "static.vecteezy.com",
				pathname: "/system/resources/previews/**",
				protocol: "https",
			},
			{
				hostname: "qyfqvfdpjfhwsboiuybh.supabase.co",
				pathname: "/storage/v1/object/public/**",
				protocol: "https",
			},
			{
				hostname: "static.wikia.nocookie.net",
				pathname: "/**",
				protocol: "https",
			},
			{
				hostname: "raw.githubusercontent.com",
				pathname: "/**",
				protocol: "https",
			},
		],
	},
}
export default withPWA(config)
