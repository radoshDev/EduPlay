import { NewTaskCategoryForm } from "@/components/forms"
import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"

const NewTaskCategory = () => {
	return (
		<PageLayout
			title={
				<PageTitle title="New Task Category" backButton href="/library" />
			}>
			<NewTaskCategoryForm />
		</PageLayout>
	)
}

export default NewTaskCategory
