import Image from "next/image"
import { FC } from "react"

type Props = {
	title: string
	imageSrc: string
}

const ImageCard: FC<Props> = ({ imageSrc, title }) => {
	const capitalizeTitle = title[0].toUpperCase() + title.slice(1)
	return (
		<div className="gap-4 grid justify-center">
			<Image className="self-center" src={imageSrc} alt={title} width={400} height={400} />
			<div className="text-2xl font-bold text-center">{capitalizeTitle}</div>
		</div>
	)
}

export default ImageCard
