import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { getOneStudentServer } from "@/server/api/handlers/student/getOneStudentHandler"
import { PageProps } from "@/types"
import { notFound } from "next/navigation"
import { NavAvatar, TaskList } from "@/components/education"

const StudentPage = async ({ params }: PageProps<"studentId">) => {
	const student = await getOneStudentServer(params.studentId)
	if (!student) notFound()
	return (
		<PageLayout
			title={
				<PageTitle
					title="EduPlay"
					backButton
					href="/students"
					afterAction={<NavAvatar student={student} />}
				/>
			}>
			<TaskList studentId={student.id} />
		</PageLayout>
	)
}

export default StudentPage
