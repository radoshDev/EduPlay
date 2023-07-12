import PageLayout from "@/components/layouts/PageLayout"
import { ButtonAdd, CategoryList, PageTitle } from "@/components/ui"
import { getServerAuthSession } from "@/server/auth"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import { notFound } from "next/navigation"

const TaskCategoryPage = async ({ params }: PageProps<"category">) => {
	const session = await getServerAuthSession()
	const isAdmin = session?.user.role === "admin"
	const categorySlug = params.category
	const taskCategory = await prisma.taskCategory.findUnique({
		where: { slug: categorySlug },
	})
	if (!taskCategory) notFound()
	const taskSubcategories = await prisma.taskSubCategory.findMany({
		where: { parentSlug: categorySlug },
	})

	return (
		<PageLayout
			title={<PageTitle title={taskCategory.title} backButton href="." />}>
			<div className="flex w-full max-w-md flex-col items-center">
				<CategoryList
					list={taskSubcategories}
					hrefStart={`library/${categorySlug}`}
				/>
				{isAdmin && <ButtonAdd href={`${categorySlug}/new`} />}
			</div>
		</PageLayout>
	)
}

export default TaskCategoryPage
