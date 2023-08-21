import { Button } from "@/components/ui/buttons"
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io"
import { BsDatabaseFillAdd } from "react-icons/bs"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { nextRound, updateTaskIndex } from "@/redux/features/task/taskSlice"
import { selectCurrentTaskRound } from "@/redux/features/task/selector"
import { api } from "@/utils/api"
import { useRef } from "react"

const Navigation = () => {
	const nextRoundAudioRef = useRef<HTMLAudioElement | null>(null)
	const earnedCoinAudioRef = useRef<HTMLAudioElement | null>(null)
	const { mutateAsync: saveProgressToDB } =
		api.student.saveProgress.useMutation({ retry: 2 })
	const dispatch = useAppDispatch()
	const currentTaskRound = useAppSelector(selectCurrentTaskRound)
	const studentId = useAppSelector(s => s.task.studentId)

	if (!currentTaskRound) return null

	const isRoundEnd = currentTaskRound.index === currentTaskRound.roundLength

	function handlePrev() {
		dispatch(updateTaskIndex("decrement"))
	}

	async function handleNext() {
		dispatch(updateTaskIndex("increment"))

		handlePlaySound()
	}

	function handleNewRound() {
		dispatch(nextRound())
		if (studentId && studentId !== "unknown") {
			saveProgressToDB({
				studentId,
				roundLength: currentTaskRound!.roundLength,
			})
		}
	}

	function handlePlaySound() {
		if (!currentTaskRound) return

		const isLastWord =
			currentTaskRound.index === currentTaskRound.roundLength - 1
		const sound = isLastWord
			? earnedCoinAudioRef.current
			: nextRoundAudioRef.current

		if (!sound) return

		if (!sound.paused) {
			sound.pause()
			sound.currentTime = 0
		}
		sound.play()
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
			<div className="hidden">
				<audio ref={nextRoundAudioRef} src="/success-sound.mp3" />
				<audio ref={earnedCoinAudioRef} src="/coin-earned.mp3" />
			</div>
		</div>
	)
}

export default Navigation
