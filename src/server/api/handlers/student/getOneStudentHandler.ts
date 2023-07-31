import { prisma } from "@/server/db"
import { Student } from "@prisma/client"

export const getOneStudentServer = async (studentId: Student["id"]) => {
	return prisma.student.findUnique({ where: { id: studentId } })
}
