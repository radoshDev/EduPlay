import { Button } from "@/components/ui/buttons"
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io"
import { FC } from "react"

const Navigation: FC = () => {
	return (
		<div className="flex justify-center gap-10">
			<Button>
				<IoMdArrowRoundBack size={30} />
			</Button>
			<Button variant="primary">
				<IoMdArrowRoundForward size={30} />
			</Button>
		</div>
	)
}

export default Navigation
