import { NewCreatureCategoryForm } from "@/components/forms"
import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"

const NewCategoryPage = async () => {
	return (
		<PageLayout
			title={
				<PageTitle
					title="Adding new creature category"
					backButton
					href="/creatures"
				/>
			}>
			<NewCreatureCategoryForm />
		</PageLayout>
	)
}

export default NewCategoryPage
