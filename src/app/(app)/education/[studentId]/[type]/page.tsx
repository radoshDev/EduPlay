import { TaskBoard } from "@/components/education"
import { PageProps } from "@/types"
import { getCreatures } from "@/utils/getCreatures"
import { getTasks } from "@/utils/getTasks"

type Props = PageProps<"type" | "studentId">

const EducationTypePage = async ({ params }: Props) => {
	const tasks = await getTasks(params.type)
	const creatures = await getCreatures(params.studentId)

	return (
		<TaskBoard
			tasks={tasks}
			creatures={creatures}
			roundLength={5}
			taskType={params.type}
			studentId={params.studentId}
		/>
	)
}

export default EducationTypePage
