import PageLayout from "@/components/layouts/PageLayout"
import PageTitle from "@/components/ui/PageTitle/PageTitle"

const NewStudentPage = () => {
	return (
		<PageLayout
			title={<PageTitle title="New students" backButton href="/students" />}>
			<div>New Student</div>
		</PageLayout>
	)
}

export default NewStudentPage
