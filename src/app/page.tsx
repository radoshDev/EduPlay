import { getServerAuthSession } from "@/server/auth"
import PageLayout from "@/components/layouts/PageLayout"
import { Button } from "@/components/ui"

async function Home() {
	const session = await getServerAuthSession()
	return (
		<PageLayout
			title={
				<h1 className="text-center text-2xl">EduPlay: Learn & Earn Coins</h1>
			}>
			<Button href={session ? "/students" : "/login"}>Get started</Button>
		</PageLayout>
	)
}

export default Home
