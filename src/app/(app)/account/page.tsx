import PageLayout from "@/components/layouts/PageLayout"
import StudentsCompareStat from "@/components/students/StudentsCompareStat/StudentsCompareStat"
import { PageTitle } from "@/components/ui"
import { Button, ButtonLogout } from "@/components/ui/buttons"
import { GRAPH_COLORS } from "@/constants"
import { getServerApi } from "@/server/api/api"
import { getServerAuthSession } from "@/server/auth"
import { StudentsProgress } from "@/types/Student"

const AccountPage = async () => {
	const session = await getServerAuthSession()
	const students = await getServerApi(session).student.getStudents()
	const studentsDailyProgress = await Promise.all(
		students.map(student =>
			getServerApi(null).student.getStudentProgress({ id: student.id })
		)
	)
	const uniqueDates = [
		...new Set(studentsDailyProgress.flat().map(({ date }) => date)),
	]

	const studentsProgress: StudentsProgress[] = studentsDailyProgress.map(
		(progress, i) => ({
			label:
				students.find(item => item.id === progress[0].studentId)?.name ||
				"Unknown",
			backgroundColor: GRAPH_COLORS[i],
			progress: uniqueDates.map(label => {
				const entry = progress.find(item => item.date == label)
				return { date: label, value: entry?.value || 0 }
			}),
		})
	)

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
			<div className="flex w-full flex-col items-center">
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
				<StudentsCompareStat studentsProgress={studentsProgress} />
			</div>
		</PageLayout>
	)
}

export default AccountPage
