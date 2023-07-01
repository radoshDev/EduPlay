"use client"

import GithubButton from "@/components/GithubButton/GithubButton"
import PageLayout from "@/components/layouts/PageLayout"

function Home() {
	return (
		<PageLayout
			title={
				<h1 className="text-center text-2xl">EduPlay: Learn & Earn Coins</h1>
			}>
			<div className="flex justify-center">
				<div className="flex flex-col gap-3">
					<GithubButton />
				</div>
			</div>
		</PageLayout>
	)
}

export default Home
