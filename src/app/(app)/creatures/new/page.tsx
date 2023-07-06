import { notFound } from "next/navigation"
import { getServerAuthSession } from "@/server/auth"
import AddNewCategory from "@/components/creatures/AddNewCategory/AddNewCategory"
import PageLayout from "@/components/layouts/PageLayout"
import PageTitle from "@/components/ui/PageTitle/PageTitle"

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
			<AddNewCategory />
		</PageLayout>
	)
}

export default NewCategoryPage
