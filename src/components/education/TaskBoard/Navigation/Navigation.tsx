import { Button } from "@/components/ui/buttons"
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io"
import { BsDatabaseFillAdd } from "react-icons/bs"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { nextRound, updateTaskIndex } from "@/redux/features/task/taskSlice"
import { selectCurrentTaskRound } from "@/redux/features/task/selector"

const Navigation = () => {
	const dispatch = useAppDispatch()
	const currentTaskRound = useAppSelector(selectCurrentTaskRound)

	if (!currentTaskRound) return null

	const isRoundEnd = currentTaskRound.index === currentTaskRound.roundLength

	function handlePrev() {
		dispatch(updateTaskIndex("decrement"))
	}

	function handleNext() {
		dispatch(updateTaskIndex("increment"))
	}

	function handleNewRound() {
		dispatch(nextRound())
	}
	return (
		<div className="flex justify-center gap-10">
			<Button disabled={currentTaskRound.index === 0} onClick={handlePrev}>
				<IoMdArrowRoundBack size={30} />
			</Button>
			{!isRoundEnd ? (
				<Button variant="primary" onClick={handleNext} disabled={isRoundEnd}>
					<IoMdArrowRoundForward size={30} />
				</Button>
			) : (
				<Button
					variant="success"
					onClick={handleNewRound}
					disabled={!isRoundEnd}>
					<BsDatabaseFillAdd size={30} />
				</Button>
			)}
		</div>
	)
}

export default Navigation
