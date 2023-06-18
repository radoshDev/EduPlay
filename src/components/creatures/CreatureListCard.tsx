import { getPokemonImage } from "@/helpers/getPokemonImage"
import { Pokemon } from "@/types/Pokemon"
import { FC } from "react"
import { BsFillQuestionCircleFill as QuestionIcon } from "react-icons/bs"
import ImageCard from "../ui/ImageCard"
import Button from "../ui/Button"
import IconButton from "../ui/IconButton"
import { creatures as Creature } from "@prisma/client"

type Props = Creature

const ResultImagesCard: FC<Props> = ({ id, name, media }) => {
	return (
		<div className="shadow-md p-4 bg-white rounded-lg  flex flex-col gap-4 items-center">
			<ImageCard title={name} imageSrc={media[0]} />
			<IconButton icon={<QuestionIcon size={24} />} color="yellow" />
		</div>
	)
}

export default ResultImagesCard
