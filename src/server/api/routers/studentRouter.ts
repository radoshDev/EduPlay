import { addStudentHandler } from "../handlers/student/addStudentHandler"
import { getStudentsHandler } from "../handlers/student/getStudentsHandler"
import { createTRPCRouter } from "../trpc"

const studentRouter = createTRPCRouter({
	getStudents: getStudentsHandler,
	addStudent: addStudentHandler,
})

export default studentRouter
