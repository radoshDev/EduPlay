import { CoinIcon } from "@/components/ui/icons"
import { FC } from "react"

const BoardResult: FC = () => {
	return (
		<div className="w-20 cursor-pointer">
			<CoinIcon count={0} />
		</div>
	)
}

export default BoardResult
