import Link from "next/link"
import type { CreatureCategory } from "@prisma/client"
import { prisma } from "@/server/db"
import ImageCard from "../ui/ImageCard/ImageCard"
import { ReactNode } from "react"

type Props = {
	categorySlug: CreatureCategory["slug"]
	categoryTitle: CreatureCategory["title"]
}

const CreaturesList = async ({ categorySlug, categoryTitle }: Props) => {
	const creatures = await prisma.creature.findMany({
		where: { categorySlug },
		orderBy: { name: "asc" },
	})
	let content: ReactNode
	if (creatures.length === 0) {
		content = <div>Список {categoryTitle} порожній.</div>
	} else {
		content = creatures.map(creature => (
			<Link href={`${categorySlug}/${creature.id}`} key={creature.id}>
				<ImageCard title={creature.name} imageSrc={creature.media[0]} />
			</Link>
		))
	}

	return (
		<div className="mb-6 flex flex-1 flex-wrap content-start items-start justify-center gap-3 overflow-auto">
			{content}
		</div>
	)
}

export default CreaturesList
