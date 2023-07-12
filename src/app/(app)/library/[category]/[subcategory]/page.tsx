import { notFound } from "next/navigation"
import PageLayout from "@/components/layouts/PageLayout"
import { ButtonAdd, PageTitle } from "@/components/ui"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import { getServerAuthSession } from "@/server/auth"
import { TaskList } from "@/components/library"

type Props = PageProps<"subcategory" | "category">

const TaskSubcategoryPage = async ({ params }: Props) => {
	const subcategorySlug = params.subcategory
	const session = await getServerAuthSession()
	const isAdmin = session?.user.role === "admin"
	const taskSubcategory = await prisma.taskSubCategory.findUnique({
		where: { slug: subcategorySlug },
	})

	if (!taskSubcategory) notFound()
	const tasks = await prisma.task.findMany({
		where: { subcategorySlug },
		orderBy: { value: "asc" },
	})
	return (
		<PageLayout
			title={<PageTitle title={taskSubcategory.title} backButton href="." />}>
			<div className="flex w-full max-w-md flex-col items-center">
				<TaskList tasks={tasks} subcategorySlug={subcategorySlug} />
				{isAdmin && <ButtonAdd href={`${params.subcategory}/new`} />}
			</div>
		</PageLayout>
	)
}

export default TaskSubcategoryPage
