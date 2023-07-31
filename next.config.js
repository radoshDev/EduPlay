/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")

const nextConfig = {
	...withPWA({
		dest: "public",
		register: true,
		skipWaiting: true,
	}),
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
module.exports = nextConfig
