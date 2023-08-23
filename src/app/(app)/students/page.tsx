import { BsFillGearFill } from "react-icons/bs"
import { PageTitle } from "@/components/ui"
import { ButtonAdd, ButtonIcon } from "@/components/ui/buttons"
import PageLayout from "@/components/layouts/PageLayout"
import StudentList from "@/components/students/StudentList"
import { getServerApi } from "@/server/api/api"
import { getServerAuthSession } from "@/server/auth"

export const metadata = {
	title: "Students | EduPlay",
	description:
		"EduPlay: Learn & Earn Coins makes education exciting with fun-filled lessons on alphabets, words, and math. Kids enjoy the engaging, interactive tasks and earn coins for their achievements, turning learning into an adventurous game!",
}

const StudentsPage = async () => {
	const session = await getServerAuthSession()
	const students = await getServerApi(session).student.getStudents()
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
				<StudentList students={students} />
				<div className="text-center">
					<ButtonAdd href="/students/add" />
				</div>
			</div>
		</PageLayout>
	)
}

export default StudentsPage
