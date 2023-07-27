import { ButtonIcon } from "@/components/ui/buttons"
import { IoCloseCircleSharp } from "react-icons/io5"
import { SlOptionsVertical } from "react-icons/sl"
import BoardResult from "./BoardResult/BoardResult"
import { useAppSelector } from "@/redux/hooks"
import { selectCurrentTaskRound } from "@/redux/features/task/selector"

const Header = () => {
	const currentTaskRound = useAppSelector(selectCurrentTaskRound)
	if (!currentTaskRound) return null
	return (
		<div>
			<div className="mb-2 flex items-start justify-between">
				<ButtonIcon
					icon={<IoCloseCircleSharp size={40} />}
					color="error"
					size="md"
					href="."
					round
				/>
				<BoardResult />
				<ButtonIcon
					icon={<SlOptionsVertical size={30} />}
					color="info"
					size="md"
				/>
			</div>
			<progress
				className="progress h-4 w-full"
				value={currentTaskRound.index}
				max={currentTaskRound.roundLength}></progress>
		</div>
	)
}

export default Header
