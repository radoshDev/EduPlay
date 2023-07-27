import { CoinIcon } from "@/components/ui/icons"
import { selectCurrentTaskRound } from "@/redux/features/task/selector"
import { useAppSelector } from "@/redux/hooks"

const BoardResult = () => {
	const currentTaskRound = useAppSelector(selectCurrentTaskRound)
	if (!currentTaskRound) return null
	return (
		<div className="w-20 cursor-pointer">
			<CoinIcon count={currentTaskRound.earned} />
		</div>
	)
}

export default BoardResult
