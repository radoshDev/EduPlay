import { BsFillGearFill } from "react-icons/bs"
import PageLayout from "@/components/layouts/PageLayout"
import PageTitle from "@/components/ui/PageTitle/PageTitle"
import ButtonIcon from "@/components/ui/buttons/ButtonIcon"

const DashboardPage = () => {
	const accountSettings = (
		<ButtonIcon
			href="/account"
			icon={<BsFillGearFill size={24} />}
			color="secondary"
			round
		/>
	)
	return (
		<PageLayout
			title={<PageTitle title="Dashboard" afterAction={accountSettings} />}>
			Users
		</PageLayout>
	)
}

export default DashboardPage
