import Image from "next/image"
import cn from "clsx"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import { notFound } from "next/navigation"

const CreaturePage = async ({
	params,
}: PageProps<"creatureId" | "categorySlug">) => {
	const creature = await prisma.creature.findUnique({
		where: { id: params.creatureId },
	})

	if (!creature) notFound()

	const isLargeImage = params.categorySlug !== "among-us"

	return (
		<div>
			<Image
				src={creature.media[0]}
				alt={creature.name}
				width={isLargeImage ? 300 : 150}
				height={isLargeImage ? 300 : 150}
				className={cn("mx-auto object-contain", {
					["max-h-[75vh]"]: isLargeImage,
				})}
			/>

			{creature.descriptionUA && (
				<div className="mt-6 text-lg md:mx-auto md:max-w-md">
					{creature.descriptionUA}
				</div>
			)}
			{creature.description && (
				<div className="mt-6 md:mx-auto md:max-w-md">
					{creature.description}
				</div>
			)}
		</div>
	)
}

export default CreaturePage
