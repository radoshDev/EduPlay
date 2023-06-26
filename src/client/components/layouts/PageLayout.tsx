import { FC, ReactNode } from "react"
import { BoxArrowInLeft } from "react-bootstrap-icons/"
import Link from "next/link"
import IconButton from "../ui/IconButton"

type Props = {
	children: ReactNode
	title?: string
}

const PageLayout: FC<Props> = ({ children, title }) => {
	return (
		<div className="py-4">
			<div className="container">
				<div className="flex gap-6 items-center">
					<Link href="/">
						<IconButton icon={<BoxArrowInLeft size={24} />} />
					</Link>
					{title && <h1 className="h1">{title}</h1>}
				</div>
				<div className="py-6">{children}</div>
			</div>
		</div>
	)
}

export default PageLayout
