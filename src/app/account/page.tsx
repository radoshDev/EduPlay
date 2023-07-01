import PageLayout from "@/components/layouts/PageLayout"
import Button from "@/components/ui/Button"
import PageTitle from "@/components/ui/PageTitle/PageTitle"
import ButtonLogout from "@/components/ui/buttons/ButtonLogout"
import { FC } from "react"

const AccountPage: FC = () => {
	return (
		<PageLayout
			title={<PageTitle title="Account" backButton href="/dashboard" />}>
			<div className="flex justify-center">
				<div className="flex flex-col gap-3">
					<Button size="sm" variant="neutral" className="" href="/creatures">
						Creatures
					</Button>
					<ButtonLogout />
				</div>
			</div>
		</PageLayout>
	)
}

export default AccountPage
