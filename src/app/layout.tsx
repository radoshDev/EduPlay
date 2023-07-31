import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import RootProvider from "@/components/Providers/RootProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "EduPlay: Learn & Earn Coins",
	description:
		"EduPlay: Learn & Earn Coins makes education exciting with fun-filled lessons on alphabets, words, and math. Kids enjoy the engaging, interactive tasks and earn coins for their achievements, turning learning into an adventurous game!",
	manifest: "/manifest.json",
	themeColor: "#fff",
	icons: { apple: "/icon.png" },
}

function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" data-theme="light">
			<body className={inter.className}>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	)
}

export default RootLayout
