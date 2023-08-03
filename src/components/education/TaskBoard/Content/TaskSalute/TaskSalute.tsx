import Image from "next/image"
import { FaQuestionCircle } from "react-icons/fa"
import {
	selectCurrentTaskRound,
	selectIsRoundEnd,
} from "@/redux/features/task/selector"
import { useAppSelector } from "@/redux/hooks"
import { ButtonIcon } from "@/components/ui/buttons"

const TaskSalute = () => {
	const { studentId, taskType } = useAppSelector(s => s.task)
	const isRoundEnd = useAppSelector(selectIsRoundEnd)
	const currentRound = useAppSelector(selectCurrentTaskRound)

	if (!currentRound) return null
	const hide = isRoundEnd
		? ""
		: "opacity-0 pointer-events-none absolute left-1/2 -translate-x-1/2"
	const { creature } = currentRound
	const cbQuery = encodeURI(`/education/${studentId}/${taskType}`)
	return (
		<div className={`flex flex-col items-center gap-6 ${hide}`}>
			<Image
				className="h-64 object-contain"
				src={creature.mainImage}
				alt={creature.name}
				width={300}
				height={300}
			/>
			<div className="text-2xl font-bold">{creature.name}</div>
			<ButtonIcon
				color="warning"
				icon={<FaQuestionCircle size={24} />}
				href={`/creatures/${creature.categorySlug}/${creature.id}?cb=${cbQuery}`}
			/>
		</div>
	)
}

export default TaskSalute
