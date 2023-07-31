"use client"
import { FC, useMemo, useState } from "react"
import Image from "next/image"
import cn from "clsx"
import breakArrayBySize from "@/helpers/breakArrayBySize"

type Props = {
	imageUrls: string[]
	setImage: (imageUrl: string) => void
}

const ImageSelector: FC<Props> = ({ imageUrls, setImage }) => {
	const [selectedImage, setSelectedImage] = useState(imageUrls[0])
	const slides = useMemo(() => breakArrayBySize(imageUrls, 8), [imageUrls])

	function handleSelectImage(img: string) {
		setSelectedImage(img)
		setImage(img)
	}
	return (
		<div className="carousel mx-auto flex w-full max-w-[250px]">
			{slides.map((slide, i) => (
				<div className="carousel-item w-full p-3" key={i}>
					<div className="flex w-full flex-wrap gap-2">
						{slide.map(imageUrl => (
							<div
								key={imageUrl}
								role="button"
								className={cn(
									"h-[50px] w-[50px] overflow-hidden rounded-full border-2 p-[3px] shadow-md",
									{ "border-emerald-500": imageUrl === selectedImage }
								)}
								onClick={() => handleSelectImage(imageUrl)}>
								<Image
									className="h-full w-full object-contain"
									src={imageUrl}
									alt="creatures"
									width={50}
									height={50}
								/>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default ImageSelector
