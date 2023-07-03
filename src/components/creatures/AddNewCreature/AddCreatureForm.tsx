"use client"

import { FC, FormEvent, useRef } from "react"
import Button from "@/components/ui/Button"
import InputField from "@/components/ui/InputField"
import InputImageField from "@/components/ui/InputImageField"
import TextAreaField from "@/components/ui/TextAreaField"
import Toast from "@/components/ui/Toast/Toast"
import toBase64 from "@/helpers/toBase64"
import { CreatureAddInput } from "@/schemas/CreatureSchema"
import { api } from "@/utils/api"

type Props = {
	categorySlug: string
}

const AddCreatureForm: FC<Props> = ({ categorySlug }) => {
	const nameRef = useRef<HTMLInputElement | null>(null)
	const descriptionRef = useRef<HTMLTextAreaElement | null>(null)
	const fileRef = useRef<HTMLInputElement | null>(null)
	const imageUrlRef = useRef<HTMLInputElement | null>(null)
	const { mutate, isSuccess, isError, error } =
		api.creature.addCreature.useMutation()

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const name = nameRef.current?.value
		const description = descriptionRef.current?.value
		const file = fileRef.current?.files?.[0]
		let imageUrl = imageUrlRef.current?.value
		let imageFile: CreatureAddInput["imageFile"] | undefined

		if (!name) return

		if (file) {
			imageFile = { base64: await toBase64(file), name: file.name }
		}

		mutate({ categorySlug, description, imageUrl, imageFile, name })
	}

	return (
		<>
			{isSuccess && <Toast message="Creature added!" variant="success" />}
			{isError && (
				<Toast
					variant="error"
					message={error.shape?.message || "Failed to add"}
				/>
			)}
			<form onSubmit={handleSubmit} className="mx-auto max-w-sm text-center">
				<InputField ref={nameRef} label="Name" type="text" required />
				<TextAreaField
					ref={descriptionRef}
					title="Description"
					id="creature-desc"
				/>
				<InputField label="Category" value={categorySlug} disabled />
				<div className="mb-5">
					<InputImageField ref={fileRef} title="Image" />
					<div className="divider mb-0">or</div>
					<InputField ref={imageUrlRef} label="Image URL" />
				</div>
				<Button type="submit" variant="success">
					Create
				</Button>
			</form>
		</>
	)
}

export default AddCreatureForm
