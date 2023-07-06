import ButtonAdd from "@/components/ui/buttons/ButtonAdd"
import { BsFillGearFill } from "react-icons/bs"
import PageLayout from "@/components/layouts/PageLayout"
import PageTitle from "@/components/ui/PageTitle/PageTitle"
import ButtonIcon from "@/components/ui/buttons/ButtonIcon"

export const metadata = {
	title: "Students | EduPlay",
	description:
		"EduPlay: Learn & Earn Coins makes education exciting with fun-filled lessons on alphabets, words, and math. Kids enjoy the engaging, interactive tasks and earn coins for their achievements, turning learning into an adventurous game!",
}

const StudentsPage = () => {
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
			title={<PageTitle title="Students" afterAction={accountSettings} />}>
			<div className="flex flex-col">
				<div className="flex-1">Students</div>
				<ButtonAdd href="/students/new" />
			</div>
		</PageLayout>
	)
}

export default StudentsPage
