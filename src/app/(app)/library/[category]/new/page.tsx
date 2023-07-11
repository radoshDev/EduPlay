import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { PageProps } from "@/types"

const NewSubCategoryPage = ({ params }: PageProps<"category">) => {
	return (
		<PageLayout
			title={
				<PageTitle
					title={`New ${params.category} subcategory`}
					backButton
					href={`/library/${params.category}`}
				/>
			}>
			<div>NewSubCategoryPage Component</div>
		</PageLayout>
	)
}

export default NewSubCategoryPage
