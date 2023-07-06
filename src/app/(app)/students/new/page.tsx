import PageLayout from "@/components/layouts/PageLayout"
import PageTitle from "@/components/ui/PageTitle/PageTitle"

export const metadata = {
	title: "New student | EduPlay",
	description:
		"EduPlay: Learn & Earn Coins makes education exciting with fun-filled lessons on alphabets, words, and math. Kids enjoy the engaging, interactive tasks and earn coins for their achievements, turning learning into an adventurous game!",
}

const NewStudentPage = () => {
	return (
		<PageLayout
			title={<PageTitle title="New students" backButton href="/students" />}>
			<div>New Student</div>
		</PageLayout>
	)
}

export default NewStudentPage
