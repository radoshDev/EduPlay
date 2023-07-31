import { notFound } from "next/navigation"
import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import { TaskForm } from "@/components/forms"

type Props = PageProps<"taskId" | "subcategory">

const TaskEditPage = async ({ params }: Props) => {
	const taskId = params.taskId
	const task = await prisma.task.findUnique({ where: { id: taskId } })
	if (!task) notFound()
	return (
		<PageLayout title={<PageTitle title="Edit task" backButton href="." />}>
			<TaskForm taskDefault={task} action="updateTask" />
		</PageLayout>
	)
}

export default TaskEditPage
