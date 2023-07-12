import { ImportForm, NewTaskForm } from "@/components/forms"
import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { IMPORT_TEMPLATE } from "@/constants"
import { PageProps } from "@/types"

const NewTaskPage = ({ params }: PageProps<"subcategory">) => {
	return (
		<PageLayout
			title={
				<PageTitle
					title="New Task"
					backButton
					href="."
					afterAction={
						<ImportForm
							action="importTasks"
							templateLink={IMPORT_TEMPLATE.tasks}
						/>
					}
				/>
			}>
			<NewTaskForm subcategorySlug={params.subcategory} />
		</PageLayout>
	)
}

export default NewTaskPage
