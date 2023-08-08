import { FC, MouseEvent } from "react"
import { BsPlusCircleFill } from "react-icons/bs"
import { ButtonIcon } from "@/components/ui/buttons"

type Props = {
	href?: string
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void
	className?: string
}

const ButtonAdd: FC<Props> = ({ href, onClick, className }) => {
	return (
		<ButtonIcon
			className={className}
			round
			icon={<BsPlusCircleFill size={30} />}
			color="success"
			href={href}
			onClick={onClick}
		/>
	)
}

export default ButtonAdd
