import { FC, ReactElement } from "react"

type Props = {
	title: string
	navAction?: ReactElement
}

const PageTitle: FC<Props> = ({ title, navAction }) => {
	return (
		<div className="mb-3 flex items-center gap-3">
			{navAction}
			<h3 className="text-2xl font-bold">{title}</h3>
		</div>
	)
}

export default PageTitle
