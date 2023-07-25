import { FC } from "react"
import { BiEdit } from "react-icons/bi"
import { ButtonIcon } from "@/components/ui/buttons"

type Props = {
	href?: string
	onClick?: () => void
	className?: string
}

const ButtonEdit: FC<Props> = ({ href, onClick, className }) => {
	return (
		<ButtonIcon
			className={className}
			icon={<BiEdit size={30} />}
			color="secondary"
			href={href}
			onClick={onClick}
		/>
	)
}

export default ButtonEdit
