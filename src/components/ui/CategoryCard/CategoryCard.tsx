import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import { IconType } from "react-icons/lib"

type Props = {
	title: string
	imageSrc?: string
	Icon?: IconType
	href?: string
}

const CategoryCard: FC<Props> = ({ imageSrc, title, Icon, href }) => {
	const content = (
		<div className="flex items-center gap-5 overflow-hidden rounded-lg shadow-md">
			{Icon && (
				<div className="flex w-32 justify-center p-4 text-success">
					<Icon size={40} />
				</div>
			)}
			{imageSrc && (
				<Image
					className="h-32 w-32 object-contain"
					src={imageSrc}
					alt={title}
					width={300}
					height={300}
				/>
			)}
			<div className="text-xl font-bold">{title}</div>
		</div>
	)

	if (href) {
		return <Link href={href}>{content}</Link>
	}

	return content
}

export default CategoryCard
