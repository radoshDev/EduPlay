import { ButtonIcon } from "@/components/ui/buttons"
import { IoCloseCircleSharp } from "react-icons/io5"
import { SlOptionsVertical } from "react-icons/sl"
import BoardResult from "./BoardResult/BoardResult"

const Header = () => {
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
				<ButtonIcon icon={<SlOptionsVertical size={30} />} color="info" />
			</div>
			<progress className="progress h-4 w-full" value="10" max="100"></progress>
		</div>
	)
}

export default Header
