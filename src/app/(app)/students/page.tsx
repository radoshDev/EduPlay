import { BsFillGearFill } from "react-icons/bs"
import { ButtonAdd, PageTitle, ButtonIcon } from "@/components/ui"
import PageLayout from "@/components/layouts/PageLayout"
import StudentList from "@/components/students/StudentList"

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
			<div className="flex w-full max-w-md flex-col">
				<StudentList />
				<div className="text-center">
					<ButtonAdd href="/students/new" />
				</div>
			</div>
		</PageLayout>
	)
}

export default StudentsPage
