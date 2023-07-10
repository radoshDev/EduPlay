import NewTaskCategoryForm from "@/components/forms/NewTaskCategoryForm/NewTaskCategoryForm"
import PageLayout from "@/components/layouts/PageLayout"
import PageTitle from "@/components/ui/PageTitle/PageTitle"
import { FC } from "react"

const NewTaskCategory: FC = () => {
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
