import { getStudentsServer } from "@/server/api/handlers/student/getStudentsHandler"
import StudentAvatar from "../StudentAvatar/StudentAvatar"

const StudentList = async () => {
	const students = await getStudentsServer()
	return (
		<div className="flex flex-1 flex-wrap content-center justify-around gap-6">
			{students.map(student => (
				<StudentAvatar
					href={`/education/${student.id}`}
					title={student.name}
					imageSrc={student.avatar}
					size="md"
					key={student.id}
				/>
			))}
		</div>
	)
}

export default StudentList
