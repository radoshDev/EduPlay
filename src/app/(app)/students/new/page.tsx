import NewStudentForm from "@/components/forms/NewStudentForm/NewStudentForm"
import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { prisma } from "@/server/db"

export const metadata = {
	title: "New student | EduPlay",
	description:
		"EduPlay: Learn & Earn Coins makes education exciting with fun-filled lessons on alphabets, words, and math. Kids enjoy the engaging, interactive tasks and earn coins for their achievements, turning learning into an adventurous game!",
}

const NewStudentPage = async () => {
	const creatures = await prisma.creature.findMany({
		orderBy: [{ categorySlug: "asc" }, { name: "asc" }],
	})
	const creaturesImage = creatures.map(creature => creature.media[0])
	return (
		<PageLayout
			title={<PageTitle title="New student" backButton href="/students" />}>
			<NewStudentForm creaturesImage={creaturesImage} />
		</PageLayout>
	)
}

export default NewStudentPage
