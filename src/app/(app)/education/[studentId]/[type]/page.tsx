import { TaskBoard } from "@/components/education"
import { serverApi } from "@/server/api/api"
import { PageProps } from "@/types"

type Props = PageProps<"type" | "studentId">

const EducationTypePage = async ({ params }: Props) => {
	const student = await serverApi.student.getOneStudent({
		id: params.studentId,
	})
	const tasks = await serverApi.library.getTasks({
		difficulty: student?.difficulty,
		type: params.type,
	})
	const creatures = await serverApi.creature.getCreatures()

	return (
		<TaskBoard
			tasks={tasks}
			creatures={creatures}
			taskType={params.type}
			student={student}
		/>
	)
}

export default EducationTypePage
