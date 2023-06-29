import { FC, ReactElement, ReactNode } from "react"

type Props = {
	children: ReactNode
	title?: ReactElement
}

const PageLayout: FC<Props> = ({ children, title }) => {
	return (
		<div className="py-4">
			<div className="container mx-auto px-4">
				{title}
				<div className="py-6">{children}</div>
			</div>
		</div>
	)
}

export default PageLayout
