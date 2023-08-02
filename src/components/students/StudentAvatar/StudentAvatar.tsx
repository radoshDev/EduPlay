import { FC } from "react"
import Link from "next/link"
import { Avatar } from "@/components/ui"
import { Size, Variant } from "@/types/Styles"

type Props = {
	title: string
	imageSrc: string
	size: Size
	variant?: Variant
	href?: string
}

const StudentAvatar: FC<Props> = props => {
	const { title, imageSrc, size, href, variant } = props
	let avatarSize: number
	let textSize: string

	switch (size) {
		case "lg":
			avatarSize = 100
			textSize = "text-lg"
			break
		case "md":
			avatarSize = 80
			textSize = "text-base"
			break
		case "sm":
			avatarSize = 60
			textSize = "text-sm"
			break
		case "xs":
			avatarSize = 40
			textSize = "text-xs"
			break
		default:
			avatarSize = 80
			textSize = "text-base"
	}
	const content = (
		<>
			<Avatar
				alt={title}
				imageSrc={imageSrc}
				size={avatarSize}
				variant={variant || "warning"}
			/>
			<div className={`font-bold ${textSize}`}>{title}</div>
		</>
	)
	if (href) {
		return (
			<Link href={href} className="text-center">
				{content}
			</Link>
		)
	}
	return <div className="text-center">{content}</div>
}

export default StudentAvatar
