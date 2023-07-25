import { FC } from "react"
import { FaRocket } from "react-icons/fa"
import ButtonIcon from "../ButtonIcon/ButtonIcon"

type Props = {
	type: string
	studentId: string | undefined
}

const ButtonEducation: FC<Props> = ({ studentId, type }) => {
	if (!studentId) return null
	return (
		<ButtonIcon
			icon={<FaRocket size={24} />}
			color="primary"
			href={`/education/${studentId}/${type}`}
		/>
	)
}

export default ButtonEducation
