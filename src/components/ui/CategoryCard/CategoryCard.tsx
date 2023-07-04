import Image from "next/image"
import { FC } from "react"

type Props = {
	imageSrc: string
	title: string
}

const CategoryCard: FC<Props> = ({ imageSrc, title }) => {
	return (
		<div className="flex items-center gap-5 overflow-hidden rounded-lg shadow-md">
			<Image
				className="h-32 w-32 object-cover"
				src={imageSrc}
				alt={title}
				width={300}
				height={300}
			/>
			<div className="text-xl font-bold">{title}</div>
		</div>
	)
}

export default CategoryCard
