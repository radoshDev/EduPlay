import { StudentForm } from "@/components/forms"
import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import { notFound } from "next/navigation"
import { Suspense } from "react"

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
	const creaturesImage = creatures.map(creature => creature.media[0])
	return (
		<PageLayout title={<PageTitle title="Edit student" backButton href="." />}>
			<Suspense fallback={<div>Student Form loading...</div>}>
				<StudentForm
					creaturesImage={creaturesImage}
					action="updateStudent"
					defaultValues={{
						avatar: student.avatar,
						id: student.id,
						name: student.name,
					}}
				/>
			</Suspense>
		</PageLayout>
	)
}

export default UpdateStudentPage
