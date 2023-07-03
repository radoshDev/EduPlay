import Link from "next/link"
import type { CreatureCategory } from "@prisma/client"
import { prisma } from "@/server/db"
import ImageCard from "../ui/ImageCard"

type Props = {
	categorySlug: CreatureCategory["slug"]
	categoryTitle: CreatureCategory["title"]
}

const CreaturesList = async ({ categorySlug, categoryTitle }: Props) => {
	const creatures = await prisma.creature.findMany({
		where: { categorySlug },
		orderBy: { name: "asc" },
	})

	if (creatures.length === 0) return <div>Список {categoryTitle} порожній.</div>

	return (
		<div className="mb-6 flex flex-wrap justify-center gap-3">
			{creatures.map(creature => (
				<Link href={`${categorySlug}/${creature.id}`} key={creature.id}>
					<ImageCard title={creature.name} imageSrc={creature.media[0]} />
				</Link>
			))}
		</div>
	)
}

export default CreaturesList
