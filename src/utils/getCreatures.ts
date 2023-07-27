import { prisma } from "@/server/db"

export const getCreatures = async (studentId: string) => {
	const student = await prisma.student.findUnique({ where: { id: studentId } })
	if (!student || student.creatureCategory === "all") {
		return prisma.creature.findMany()
	}
	return prisma.creature.findMany({
		where: { categorySlug: student.creatureCategory },
	})
}
