import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { PageProps } from "@/types"

const TaskCategoryPage = ({ params }: PageProps<"category">) => {
	return (
		<PageLayout
			title={<PageTitle title={params.category} backButton href="/library" />}>
			<div>Page Component {params.category}</div>
		</PageLayout>
	)
}

export default TaskCategoryPage
