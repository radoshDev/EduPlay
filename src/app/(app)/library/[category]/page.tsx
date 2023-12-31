import PageLayout from "@/components/layouts/PageLayout"
import { CategoryList, PageTitle } from "@/components/ui"
import { ButtonAdd, ButtonEducation } from "@/components/ui/buttons"
import { getServerAuthSession } from "@/server/auth"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import { notFound } from "next/navigation"

const TaskCategoryPage = async ({
	params,
	searchParams,
}: PageProps<"category", "studentId">) => {
	const studentId = searchParams?.studentId
	const session = await getServerAuthSession()
	const isAdmin = session?.user.role === "admin"
	const categorySlug = params.category
	const taskCategory = await prisma.taskCategory.findUnique({
		where: { slug: categorySlug },
	})
	if (!taskCategory) notFound()
	const taskSubcategories = await prisma.taskSubCategory.findMany({
		where: { parentSlug: categorySlug },
		orderBy: { position: "asc" },
	})

	return (
		<PageLayout
			title={
				<PageTitle
					title={taskCategory.title}
					backButton
					href="."
					afterAction={
						<ButtonEducation studentId={studentId} type={categorySlug} />
					}
				/>
			}>
			<div className="flex w-full max-w-md flex-col items-center">
				<CategoryList
					list={taskSubcategories}
					hrefStart={`library/${categorySlug}`}
					studentId={studentId}
				/>
				{isAdmin && <ButtonAdd href={`${categorySlug}/new`} />}
			</div>
		</PageLayout>
	)
}

export default TaskCategoryPage
