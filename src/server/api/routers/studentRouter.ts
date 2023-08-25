import { createTRPCRouter } from "../trpc"
import { addStudentHandler } from "../handlers/student/addStudentHandler"
import { getStudentsHandler } from "../handlers/student/getStudentsHandler"
import { updateStudentHandler } from "../handlers/student/updateStudentHandler"
import saveProgressHandler from "../handlers/student/saveProgressHandler"
import getOneStudentHandler from "../handlers/student/getOneStudentHandler"
import getStudentProgressHandler from "../handlers/student/getStudentProgressHandler"

const studentRouter = createTRPCRouter({
	getOneStudent: getOneStudentHandler,
	getStudents: getStudentsHandler,
	addStudent: addStudentHandler,
	updateStudent: updateStudentHandler,
	saveProgress: saveProgressHandler,
	getStudentProgress: getStudentProgressHandler,
})

export default studentRouter
