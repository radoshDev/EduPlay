import { redirect } from "next/navigation"
import { getServerAuthSession } from "@/server/auth"
import PageLayout from "@/components/layouts/PageLayout"
import { Button } from "@/components/ui/buttons"
import { PageTitle } from "@/components/ui"

async function Home() {
	const session = await getServerAuthSession()
	if (session) redirect("/students")
	return (
		<PageLayout
			title={
				<PageTitle
					title="EduPlay: Learn & Earn Coins"
					afterAction={
						<Button size="sm" variant="success" href="/login">
							Увійти
						</Button>
					}
				/>
			}>
			<div className="flex flex-1 items-center justify-center">
				<Button size="lg" variant="primary" href={`/education/unknown/coins`}>
					До занять
				</Button>
			</div>
		</PageLayout>
	)
}

export default Home
