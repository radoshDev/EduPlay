import PageLayout from "@/components/layouts/PageLayout"
import Button from "@/components/ui/Button"

function Home() {
	return (
		<PageLayout
			title={
				<h1 className="text-center text-2xl">EduPlay: Learn & Earn Coins</h1>
			}>
			<div className="flex justify-center">
				<div className="flex flex-col gap-3">
					<Button variant="secondary" href="/register">
						Sign Up
					</Button>
					<Button variant="primary" href="/login" className="btn-outline">
						Sign in with EduPlay account
					</Button>
				</div>
			</div>
		</PageLayout>
	)
}

export default Home
