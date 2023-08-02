import { FC } from "react"
import { FaRocket } from "react-icons/fa"
import ButtonIcon from "../ButtonIcon/ButtonIcon"

type Props = {
	type?: string
	studentId?: string
}

const ButtonEducation: FC<Props> = ({ studentId, type }) => {
	let href: string
	if (!studentId) {
		href = "/students"
	} else if (!type) {
		href = `/education/${studentId}`
	} else {
		href = `/education/${studentId}/${type}`
	}
	return (
		<ButtonIcon icon={<FaRocket size={24} />} color="primary" href={href} />
	)
}

export default ButtonEducation
