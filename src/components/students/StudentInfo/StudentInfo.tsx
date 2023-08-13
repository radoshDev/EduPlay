import { Badge } from "@/components/ui"
import { Student } from "@prisma/client"
import StudentAvatar from "../StudentAvatar/StudentAvatar"

type Props = {
	student: Student
}

const StudentInfo = ({ student }: Props) => {
	return (
		<div className="mb-4">
			<StudentAvatar
				size="lg"
				title={student.name}
				imageSrc={student.avatar}
				variant="success"
			/>
			<div className="mt-2 font-bold">
				Difficulty:{" "}
				<Badge text={student.difficulty} color="primary" size="lg" outline />
			</div>
			<div className="mt-2 font-bold">
				Round Length:{" "}
				<Badge
					text={`${student.roundLength}`}
					color="primary"
					size="lg"
					outline
				/>
			</div>
		</div>
	)
}

export default StudentInfo
