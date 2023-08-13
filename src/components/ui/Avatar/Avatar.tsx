import { Variant } from "@/types/Styles"
import Image from "next/image"
import { FC } from "react"

type Props = {
	imageSrc: string
	alt: string
	size: number
	variant: Variant
}

const Avatar: FC<Props> = ({ alt, imageSrc, size, variant }) => {
	return (
		<div className="avatar">
			<div
				className={`w-[${size}px] rounded-full ring ring-${variant} ring-offset-2 ring-offset-base-100`}>
				<Image
					className="!object-cover"
					src={imageSrc}
					alt={alt}
					width={size}
					height={size}
				/>
			</div>
		</div>
	)
}

export default Avatar
