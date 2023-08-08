"use client"
import { MouseEvent, useState } from "react"
import { MdRemoveCircle } from "react-icons/md"
import { nanoid } from "nanoid"
import { InputField } from "@/components/ui"
import { ButtonAdd, ButtonIcon } from "@/components/ui/buttons"

type Props = {
	setMedia: (values: string[]) => void
	defaultValues?: string[]
}

const MediaBlock = ({ setMedia, defaultValues }: Props) => {
	const [mediaInputs, setMediaInputs] = useState<
		{ id: string; value: string }[]
	>(defaultValues?.map(value => ({ id: nanoid(5), value })) || [])

	function handleMediaChange(id: string, val: string) {
		const idx = mediaInputs.findIndex(input => input.id === id)
		setMediaInputs([
			...mediaInputs.slice(0, idx),
			{ id, value: val },
			...mediaInputs.slice(idx + 1),
		])
		setMedia(mediaInputs.map(m => m.value))
	}

	function handleAddMoreMedia(e: MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		setMediaInputs(p => [...p, { id: nanoid(5), value: "" }])
	}

	function handleRemoveMedia(e: MouseEvent<HTMLButtonElement>, id: string) {
		e.preventDefault()
		const filteredInputs = mediaInputs.filter(input => input.id !== id)
		setMediaInputs(filteredInputs)
		setMedia(filteredInputs.map(el => el.value))
	}

	return (
		<div className="rounded-md bg-slate-100 p-1 text-center">
			<div className="text-xl font-bold">Media</div>
			{mediaInputs.map((input, i) => (
				<div key={input.id} className="flex items-end gap-1">
					<InputField
						label={`Media ${i + 1}`}
						defaultValue={input.value}
						onChange={e => handleMediaChange(input.id, e.target.value)}
						onPaste={e =>
							handleMediaChange(input.id, e.clipboardData.getData("text"))
						}
					/>
					<ButtonIcon
						onClick={e => handleRemoveMedia(e, input.id)}
						className="mb-6"
						round
						color="error"
						icon={<MdRemoveCircle size={24} />}
					/>
				</div>
			))}
			<ButtonAdd onClick={handleAddMoreMedia} />
		</div>
	)
}

export default MediaBlock
