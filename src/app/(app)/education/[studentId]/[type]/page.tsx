import { TaskBoard } from "@/components/education"
import { PageProps } from "@/types"
import { getTasks } from "@/utils/getTasks"

type Props = PageProps<"type">

const EducationTypePage = async ({ params }: Props) => {
	const tasks = await getTasks(params.type)

	return <TaskBoard tasks={tasks} />
}

export default EducationTypePage
