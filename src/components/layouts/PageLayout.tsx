import { FC, ReactElement } from "react"

type Props = {
	children: ReactElement
	title?: ReactElement
}

const PageLayout: FC<Props> = ({ children, title }) => {
	return (
		<div className="h-screen">
			<div className="container mx-auto flex h-full flex-col p-4">
				{title}
				<div className="flex min-h-0 flex-1 justify-center pt-6">
					{children}
				</div>
			</div>
		</div>
	)
}

export default PageLayout
