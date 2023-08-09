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
		<div className="overflow-auto">
			<Image
				src={mainImage}
				alt={name}
				width={isLargeImage ? 300 : 150}
				height={isLargeImage ? 300 : 150}
				className={cn("mx-auto object-contain", {
					["max-h-[75vh]"]: isLargeImage,
				})}
			/>
			<div className="mt-4 flex flex-col gap-4">
				{media.map(image => (
					<Image
						key={image}
						src={image}
						alt={name}
						width={isLargeImage ? 250 : 100}
						height={isLargeImage ? 250 : 100}
						className={cn("mx-auto object-contain", {
							["max-h-[50vh]"]: isLargeImage,
						})}
					/>
				))}
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
