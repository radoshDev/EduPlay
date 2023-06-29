import CreatureListCard from "./CreatureListCard"
import type { creaturesCategories as CreatureCategory } from "@prisma/client"
import { prisma } from "@/server/db"

type Props = {
	categoryId: CreatureCategory["id"]
	categoryTitle: CreatureCategory["title"]
}

const CreaturesList = async ({ categoryId, categoryTitle }: Props) => {
	const creatures = await prisma.creatures.findMany({
		where: { categoryId },
		orderBy: { name: "asc" },
	})

	if (creatures.length === 0) <div>Список {categoryTitle} порожній.</div>

	return (
		<div className="grid-cols-auto-fit-250 grid gap-5">
			{creatures.map(creature => (
				<CreatureListCard {...creature} key={creature.id} />
			))}
		</div>
	)
}

export default CreaturesList
