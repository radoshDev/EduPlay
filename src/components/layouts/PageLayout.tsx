import { FC, ReactNode } from "react"
import { BiArrowBack } from "react-icons/bi"
import Button from "../ui/Button"
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
						<IconButton icon={<BiArrowBack size={24} />} color="gray" />
					</Link>
					{title && <h1 className="h1">{title}</h1>}
				</div>
				<div className="py-6">{children}</div>
			</div>
		</div>
	)
}

export default PageLayout
