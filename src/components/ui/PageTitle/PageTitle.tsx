import { FC, ReactElement } from "react"
import { BsBoxArrowInLeft } from "react-icons/bs"
import ButtonIcon from "../buttons/ButtonIcon/ButtonIcon"

type Props = {
	title: string
	navAction?: ReactElement
	afterAction?: ReactElement
	backButton?: boolean
	href?: string
}

const PageTitle: FC<Props> = props => {
	const { title, navAction, afterAction, backButton, href } = props
	const isBackButton = backButton && href
	return (
		<div className="mb-3 flex items-center gap-3">
			{isBackButton && (
				<ButtonIcon
					icon={<BsBoxArrowInLeft size={24} />}
					color="primary"
					href={href}
				/>
			)}
			{navAction}
			<h3 className="flex-1 text-center text-2xl font-bold">{title}</h3>
			{afterAction}
		</div>
	)
}

export default PageTitle
