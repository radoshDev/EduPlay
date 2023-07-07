import { FC } from "react"
import { Student } from "@prisma/client"
import Avatar from "@/components/ui/Avatar"

type Props = {
	info: Student
}

const StudentInfo: FC<Props> = ({ info }) => {
	return (
		<div className="text-center">
			<Avatar
				alt={info.name}
				imageSrc={info.avatar}
				size={80}
				variant="warning"
			/>
			<div className="font-bold">{info.name}</div>
		</div>
	)
}

export default StudentInfo
