import { createTRPCRouter } from "../trpc"
import { addStudentHandler } from "../handlers/student/addStudentHandler"
import { getStudentsHandler } from "../handlers/student/getStudentsHandler"
import { updateStudentHandler } from "../handlers/student/updateStudentHandler"

const studentRouter = createTRPCRouter({
	getStudents: getStudentsHandler,
	addStudent: addStudentHandler,
	updateStudent: updateStudentHandler,
})

export default studentRouter
