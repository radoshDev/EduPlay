import { notFound } from "next/navigation"
import { getServerAuthSession } from "@/server/auth"
import NewCreatureCategoryForm from "@/components/forms/NewCreatureCategoryForm"
import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"

const NewCategoryPage = async () => {
	const session = await getServerAuthSession()
	if (session?.user.role !== "admin") notFound()

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
