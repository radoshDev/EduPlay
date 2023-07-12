import { notFound } from "next/navigation"
import PageLayout from "@/components/layouts/PageLayout"
import { ButtonAdd, PageTitle } from "@/components/ui"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import { getServerAuthSession } from "@/server/auth"

type Props = PageProps<"subcategory" | "category">

const TaskSubcategoryPage = async ({ params }: Props) => {
	const session = await getServerAuthSession()
	const isAdmin = session?.user.role === "admin"
	const taskSubcategory = await prisma.taskSubCategory.findUnique({
		where: { slug: params.subcategory },
	})

	if (!taskSubcategory) notFound()

	return (
		<PageLayout
			title={<PageTitle title={taskSubcategory.title} backButton href="." />}>
			<div className="flex w-full max-w-md flex-col items-center">
				<div className="flex-1">{taskSubcategory.title} list</div>
				{isAdmin && <ButtonAdd href={`${params.subcategory}/new`} />}
			</div>
		</PageLayout>
	)
}

export default TaskSubcategoryPage
