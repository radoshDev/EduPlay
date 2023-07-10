import { FC } from "react"
import Link from "next/link"
import { Student } from "@prisma/client"
import Avatar from "@/components/ui/Avatar"
import { Size } from "@/types/Styles"

type Props = {
	student: Student
	size: Size
	href: string
}

const StudentAvatar: FC<Props> = ({ student, size, href }) => {
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

	return (
		<Link href={href} className="text-center">
			<Avatar
				alt={student.name}
				imageSrc={student.avatar}
				size={avatarSize}
				variant="warning"
			/>
			<div className={`font-bold ${textSize}`}>{student.name}</div>
		</Link>
	)
}

export default StudentAvatar
