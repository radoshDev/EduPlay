import { StudentForm } from "@/components/forms"
import PageLayout from "@/components/layouts/PageLayout"
import { UpdateStudentContainer } from "@/components/students"
import { PageTitle } from "@/components/ui"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import { notFound } from "next/navigation"

export const metadata = {
	title: "Edit student",
}

type Props = PageProps<"studentId">

const UpdateStudentPage = async ({ params }: Props) => {
	const student = await prisma.student.findUnique({
		where: { id: params.studentId },
	})

	if (!student) notFound()

	const creatures = await prisma.creature.findMany({
		orderBy: [{ categorySlug: "asc" }, { name: "asc" }],
	})
	const creaturesImage = creatures.map(creature => creature.mainImage)
	return (
		<PageLayout title={<PageTitle title="Edit student" backButton href="." />}>
			<UpdateStudentContainer student={student}>
				<StudentForm creaturesImage={creaturesImage} action="updateStudent" />
			</UpdateStudentContainer>
		</PageLayout>
	)
}

export default UpdateStudentPage
