import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { PageProps } from "@/types"

const TaskSubcategoryPage = ({
	params,
}: PageProps<"subcategory" | "category">) => {
	return (
		<PageLayout
			title={
				<PageTitle
					title={params.subcategory}
					backButton
					href={`/library/${params.category}`}
				/>
			}>
			<div>Page Component {params.subcategory}</div>
		</PageLayout>
	)
}

export default TaskSubcategoryPage
