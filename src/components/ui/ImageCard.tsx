import Image from "next/image"
import { FC } from "react"

type Props = {
	title: string
	imageSrc: string
}

const ImageCard: FC<Props> = ({ imageSrc, title }) => {
	const capitalizeTitle = title[0].toUpperCase() + title.slice(1)
	return (
		<div className="grid h-52 justify-center gap-4 rounded-lg p-3 shadow-lg">
			<Image
				className="h-full min-h-full self-center object-contain"
				src={imageSrc}
				alt={title}
				width={170}
				height={200}
			/>
			<div className="text-center text-2xl font-bold">{capitalizeTitle}</div>
		</div>
	)
}

export default ImageCard
