import { notFound } from "next/navigation"

import PageLayout from "@/components/layouts/PageLayout"
import { StudentInfo, StudentStat } from "@/components/students"
import { PageTitle } from "@/components/ui"
import { ButtonEdit } from "@/components/ui/buttons"
import { PageProps } from "@/types"

import { serverApi } from "@/server/api/api"

type Props = PageProps<"studentId">

const StudentPage = async ({ params }: Props) => {
	const { studentId } = params
	const student = await serverApi.student.getOneStudent({
		id: studentId,
	})

	if (!student) notFound()

	const dailyProgress = await serverApi.student.getStudentProgress({
		id: student.id,
	})

	return (
		<PageLayout
			title={
				<PageTitle
					title="Student Info"
					backButton
					href={`/education/${studentId}`}
					afterAction={<ButtonEdit href={`${studentId}/update`} />}
				/>
			}>
			<div className="w-full">
				<StudentInfo student={student} />
				<StudentStat dailyProgress={dailyProgress} />
			</div>
		</PageLayout>
	)
}

export default StudentPage
