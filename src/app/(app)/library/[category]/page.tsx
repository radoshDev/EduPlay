import PageLayout from "@/components/layouts/PageLayout"
import { ButtonAdd, CategoryList, PageTitle } from "@/components/ui"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import { notFound } from "next/navigation"

const TaskCategoryPage = async ({ params }: PageProps<"category">) => {
	const categorySlug = params.category
	const taskCategory = await prisma.taskCategory.findUnique({
		where: { slug: categorySlug },
	})
	if (!taskCategory) notFound()

	return (
		<PageLayout
			title={
				<PageTitle title={taskCategory.title} backButton href="/library" />
			}>
			<div className="flex w-full max-w-md flex-col items-center">
				<CategoryList list={[]} hrefStart={`library/${categorySlug}`} />
				<ButtonAdd href={`${categorySlug}/new`} />
			</div>
		</PageLayout>
	)
}

export default TaskCategoryPage
