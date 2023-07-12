import { NewTaskSubcategoryForm } from "@/components/forms"
import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { PageProps } from "@/types"

const NewSubCategoryPage = ({ params }: PageProps<"category">) => {
	return (
		<PageLayout
			title={<PageTitle title={`New task subcategory`} backButton href="." />}>
			<NewTaskSubcategoryForm parentSlug={params.category} />
		</PageLayout>
	)
}

export default NewSubCategoryPage
