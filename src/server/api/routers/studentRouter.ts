import { createTRPCRouter } from "../trpc"
import { addStudentHandler } from "../handlers/student/addStudentHandler"
import { getStudentsHandler } from "../handlers/student/getStudentsHandler"
import { updateStudentHandler } from "../handlers/student/updateStudentHandler"
import saveProgressHandler from "../handlers/student/saveProgressHandler"

const studentRouter = createTRPCRouter({
	getStudents: getStudentsHandler,
	addStudent: addStudentHandler,
	updateStudent: updateStudentHandler,
	saveProgress: saveProgressHandler,
})

export default studentRouter
