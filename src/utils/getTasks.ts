import { EARN_TYPES } from "@/constants"
import { prisma } from "@/server/db"

type Props = {
	type: string
	difficulty?: number
}

export const getTasks = async ({ type, difficulty }: Props) => {
	switch (type) {
		case EARN_TYPES[0].type:
		case EARN_TYPES[1].type:
		case EARN_TYPES[2].type:
			return prisma.task.findMany({
				where: { subcategory: { difficulty: { lte: difficulty } } },
			})
		case "math":
		case "reading":
		case "letters":
			return prisma.task.findMany({
				where: { subcategory: { parentSlug: type } },
			})
		default:
			return prisma.task.findMany({
				where: {
					subcategorySlug: type,
				},
			})
	}
}
