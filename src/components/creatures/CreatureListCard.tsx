import { FC } from "react"
import ImageCard from "../ui/ImageCard"
import { Creature } from "@prisma/client"

type Props = Creature

const ResultImagesCard: FC<Props> = ({ id, name, media }) => {
	return (
		<div className="flex flex-col items-center gap-4  rounded-lg bg-white p-4 shadow-md">
			<ImageCard title={name} imageSrc={media[0]} />
		</div>
	)
}

export default ResultImagesCard
