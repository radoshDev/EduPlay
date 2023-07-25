import PageLayout from "@/components/layouts/PageLayout"
import StudentAvatar from "@/components/students/StudentAvatar"
import { PageTitle } from "@/components/ui"
import { getOneStudentServer } from "@/server/api/handlers/student/getOneStudentHandler"
import { PageProps } from "@/types"
import { notFound } from "next/navigation"
import { TaskList } from "@/components/education"

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
					afterAction={
						<StudentAvatar
							student={student}
							size="xs"
							href={`/students/${params.studentId}`}
						/>
					}
				/>
			}>
			<TaskList studentId={student.id} />
		</PageLayout>
	)
}

export default StudentPage
