import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { Button, ButtonLogout } from "@/components/ui/buttons"
import { getServerAuthSession } from "@/server/auth"

const AccountPage = async () => {
	const session = await getServerAuthSession()

	return (
		<PageLayout
			title={
				<PageTitle
					title="Акаунт"
					backButton
					href="/students"
					afterAction={<ButtonLogout />}
				/>
			}>
			<div className="flex justify-center">
				<div className="flex flex-col gap-3">
					<div>
						{session?.user.name || "Unknown"}
						<div className="badge badge-accent ml-2">{session?.user.role}</div>
					</div>
					<Button size="sm" variant="neutral" className="" href="/creatures">
						Істоти
					</Button>
					<Button size="sm" variant="warning" className="" href="/library">
						Бібліотека
					</Button>
				</div>
			</div>
		</PageLayout>
	)
}

export default AccountPage
