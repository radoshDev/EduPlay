import { notFound } from "next/navigation"
import { FaRocket } from "react-icons/fa"
import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { ButtonAdd, ButtonIcon } from "@/components/ui/buttons"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import { getServerAuthSession } from "@/server/auth"
import { TaskList } from "@/components/library"

type Props = PageProps<"subcategory" | "category", "studentId">

const TaskSubcategoryPage = async ({ params, searchParams }: Props) => {
	const studentId = searchParams?.studentId
	const { subcategory } = params
	const searchQuery = studentId ? `?studentId=${studentId}` : ""
	const session = await getServerAuthSession()
	const isAdmin = session?.user.role === "admin"
	const taskSubcategory = await prisma.taskSubCategory.findUnique({
		where: { slug: subcategory },
	})

	if (!taskSubcategory) notFound()
	const tasks = await prisma.task.findMany({
		where: { subcategorySlug: subcategory },
		orderBy: { value: "asc" },
	})

	const educationButton = studentId ? (
		<ButtonIcon
			icon={<FaRocket size={24} />}
			color="primary"
			href={`/education/${studentId}/${subcategory}`}
		/>
	) : undefined

	return (
		<PageLayout
			title={
				<PageTitle
					title={taskSubcategory.title}
					backButton
					href={`.${searchQuery}`}
					afterAction={educationButton}
				/>
			}>
			<div className="flex w-full max-w-md flex-col items-center">
				<TaskList
					isLink={isAdmin}
					tasks={tasks}
					subcategorySlug={subcategory}
				/>
				{isAdmin && <ButtonAdd href={`${params.subcategory}/new`} />}
			</div>
		</PageLayout>
	)
}

export default TaskSubcategoryPage
