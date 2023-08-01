"use client"
import { FC, useMemo, useState, MouseEvent } from "react"
import Image from "next/image"
import cn from "clsx"
import breakArrayBySize from "@/helpers/breakArrayBySize"
import { ButtonIcon } from "@/components/ui/buttons"
import {
	MdOutlineArrowBackIosNew as BackIcon,
	MdOutlineArrowForwardIos as ForwardIcon,
} from "react-icons/md"

type Props = {
	imageUrls: string[]
	setImage: (imageUrl: string) => void
}

const ImageSelector: FC<Props> = ({ imageUrls, setImage }) => {
	const [slideIndex, setSlideIndex] = useState(0)
	const [selectedImage, setSelectedImage] = useState(imageUrls[0])
	const slides = useMemo(() => breakArrayBySize(imageUrls, 8), [imageUrls])
	const slide = slides[slideIndex]
	function handleSelectImage(img: string) {
		setSelectedImage(img)
		setImage(img)
	}
	function handleChangeSlide(type: "next" | "prev") {
		return (e: MouseEvent<HTMLButtonElement>) => {
			e.preventDefault()
			setSlideIndex(p => (type === "next" ? p + 1 : p - 1))
		}
	}
	return (
		<div className="mx-auto flex w-full max-w-[315px] items-center">
			<ButtonIcon
				onClick={handleChangeSlide("prev")}
				disabled={slideIndex === 0}
				color="primary"
				round
				size="sm"
				icon={<BackIcon size={22} />}
			/>

			<div className="flex h-[132px] w-full flex-wrap gap-2 p-3">
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
			<ButtonIcon
				onClick={handleChangeSlide("next")}
				disabled={slideIndex === slides.length - 1}
				color="primary"
				round
				size="sm"
				icon={<ForwardIcon size={22} />}
			/>
		</div>
	)
}

export default ImageSelector
