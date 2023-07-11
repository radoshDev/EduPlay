import { IoLibrarySharp } from "react-icons/io5"
import PageLayout from "@/components/layouts/PageLayout"
import StudentAvatar from "@/components/students/StudentAvatar"
import { ButtonIcon, PageTitle } from "@/components/ui"
import { getOneStudentServer } from "@/server/api/handlers/student/getOneStudentHandler"
import { PageProps } from "@/types"
import { notFound } from "next/navigation"

const StudentPage = async ({ params }: PageProps<"studentId">) => {
	const student = await getOneStudentServer(params.studentId)
	if (!student) notFound()
	return (
		<PageLayout
			title={
				<PageTitle
					title="EduPlay"
					navAction={
						<ButtonIcon
							icon={<IoLibrarySharp size={32} />}
							size="md"
							color="success"
							href={`/library?studentId=${student.id}`}
						/>
					}
					afterAction={
						<StudentAvatar student={student} size="xs" href="/students" />
					}
				/>
			}>
			<div>Student {params.studentId}</div>
		</PageLayout>
	)
}

export default StudentPage
