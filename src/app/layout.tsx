import "@/styles/globals.css"
import { Inter } from "next/font/google"
import RootProvider from "@/components/Providers/RootProvider"
import PWAProvider from "@/components/Providers/PWAProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "EduPlay: Learn & Earn Coins",
	description:
		"EduPlay: Learn & Earn Coins makes education exciting with fun-filled lessons on alphabets, words, and math. Kids enjoy the engaging, interactive tasks and earn coins for their achievements, turning learning into an adventurous game!",
}

function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" data-theme="light">
			<head>
				<PWAProvider />
				<meta name="theme-color" content="#ffffff" />
			</head>
			<body className={inter.className}>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	)
}

export default RootLayout
