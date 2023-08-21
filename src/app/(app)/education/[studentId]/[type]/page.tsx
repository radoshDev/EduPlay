import { TaskBoard } from "@/components/education"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import { getCreatures } from "@/utils/getCreatures"
import { getTasks } from "@/utils/getTasks"

type Props = PageProps<"type" | "studentId">

const EducationTypePage = async ({ params }: Props) => {
	const student = await prisma.student.findUnique({
		where: { id: params.studentId },
	})
	const tasks = await getTasks({
		type: params.type,
		difficulty: student?.difficulty,
	})
	const creatures = await getCreatures(params.studentId)
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
