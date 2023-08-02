import { StudentForm } from "@/components/forms"
import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { prisma } from "@/server/db"
import { Suspense } from "react"

export const metadata = {
	title: "New student | EduPlay",
	description:
		"EduPlay: Learn & Earn Coins makes education exciting with fun-filled lessons on alphabets, words, and math. Kids enjoy the engaging, interactive tasks and earn coins for their achievements, turning learning into an adventurous game!",
}

const AddStudentPage = async () => {
	const creatures = await prisma.creature.findMany({
		orderBy: [{ categorySlug: "asc" }, { name: "asc" }],
	})
	const creaturesImage = creatures.map(creature => creature.media[0])
	return (
		<PageLayout
			title={<PageTitle title="New student" backButton href="/students" />}>
			<Suspense fallback={<div>Student Form loading...</div>}>
				<StudentForm
					creaturesImage={creaturesImage}
					action="addStudent"
					defaultValues={{ avatar: creaturesImage[0] }}
				/>
			</Suspense>
		</PageLayout>
	)
}

export default AddStudentPage
