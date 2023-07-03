import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import Image from "next/image"
import { notFound } from "next/navigation"

const CreaturePage = async ({ params }: PageProps<"creatureId">) => {
	const creature = await prisma.creature.findUnique({
		where: { id: params.creatureId },
	})

	if (!creature) notFound()

	return (
		<div>
			<Image
				src={creature.media[0]}
				alt={creature.name}
				width={300}
				height={300}
				className="mx-auto max-h-[75vh] object-contain"
			/>
			{creature.description && (
				<div className="mt-6 md:mx-auto md:max-w-md">
					{creature.description}
				</div>
			)}
		</div>
	)
}

export default CreaturePage
