import { notFound } from "next/navigation"
import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import { ButtonEdit } from "@/components/ui/buttons"

type Props = PageProps<"taskId" | "category">

const TaskPage = async ({ params }: Props) => {
	const taskId = params.taskId
	const task = await prisma.task.findUnique({ where: { id: taskId } })
	if (!task) notFound()
	return (
		<PageLayout
			title={
				<PageTitle
					title="Task page"
					backButton
					href="."
					afterAction={<ButtonEdit href={`${taskId}/edit`} />}
				/>
			}>
			<div className="w-full max-w-sm">
				<table className="table">
					<tbody>
						<tr>
							<th>Value</th>
							<td>{task.value}</td>
						</tr>
						<tr>
							<th>Result</th>
							<td>{task.result}</td>
						</tr>
						<tr>
							<th>Subcategory</th>
							<td>{task.subcategorySlug}</td>
						</tr>
						<tr>
							<th>Category</th>
							<td>{params.category}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</PageLayout>
	)
}

export default TaskPage
