import { FC } from "react"
import { HiOutlineExternalLink } from "react-icons/hi"
import { Creature } from "@prisma/client"
import Image from "next/image"
import cn from "clsx"
import Link from "next/link"

type Props = {
	creature: Creature
}

const CreatureInfo: FC<Props> = ({ creature }) => {
	const { source, categorySlug, description, mainImage, name, media } = creature
	const isLargeImage = categorySlug !== "among-us"
	return (
		<div>
			<Image
				src={mainImage}
				alt={name}
				width={isLargeImage ? 300 : 150}
				height={isLargeImage ? 300 : 150}
				className={cn("mx-auto object-contain", {
					["max-h-[75vh]"]: isLargeImage,
				})}
			/>
			<div>
				Media: {JSON.stringify(media)}, {media.length}
			</div>
			{source && (
				<Link
					href={source}
					target="_blank"
					className="mt-6 flex items-center gap-1 text-info underline">
					More Info
					<HiOutlineExternalLink />
				</Link>
			)}
			{description && (
				<div className="mt-6 md:mx-auto md:max-w-md">{description}</div>
			)}
		</div>
	)
}

export default CreatureInfo
