import { notFound } from "next/navigation"
import PageLayout from "@/components/layouts/PageLayout"
import { StudentInfo } from "@/components/students"
import { PageTitle } from "@/components/ui"
import { ButtonEdit } from "@/components/ui/buttons"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"

type Props = PageProps<"studentId">

const StudentPage = async ({ params }: Props) => {
	const { studentId } = params
	const student = await prisma.student.findUnique({ where: { id: studentId } })

	if (!student) notFound()
	return (
		<PageLayout
			title={
				<PageTitle
					title="Student Info"
					backButton
					href={`/education/${studentId}`}
					afterAction={<ButtonEdit />}
				/>
			}>
			<div>
				<StudentInfo student={student} />
				<div>Statistic</div>
			</div>
		</PageLayout>
	)
}

export default StudentPage
