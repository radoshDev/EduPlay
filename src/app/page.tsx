import { redirect } from "next/navigation"
import { getServerAuthSession } from "@/server/auth"
import PageLayout from "@/components/layouts/PageLayout"
import { Button } from "@/components/ui/buttons"

async function Home() {
	const session = await getServerAuthSession()
	if (session) redirect("/students")
	return (
		<PageLayout
			title={
				<h1 className="text-center text-2xl">EduPlay: Learn & Earn Coins</h1>
			}>
			<Button href="/login">Get started</Button>
		</PageLayout>
	)
}

export default Home
