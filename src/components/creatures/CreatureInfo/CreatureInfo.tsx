import { FC } from "react"
import { Creature } from "@prisma/client"
import Image from "next/image"
import cn from "clsx"

type Props = {
	creature: Creature
}

const CreatureInfo: FC<Props> = ({ creature }) => {
	const isLargeImage = creature.categorySlug !== "among-us"
	return (
		<div>
			<Image
				src={creature.mainImage}
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

export default CreatureInfo
