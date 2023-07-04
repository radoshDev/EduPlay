"use client"

import { FC, FormEvent, useRef } from "react"
import InputField from "../../ui/InputField"
import TextAreaField from "../../ui/TextAreaField"
import InputImageField from "../../ui/InputImageField"
import Button from "@/components/ui/Button"
import { api } from "@/utils/api"
import Toast from "@/components/ui/Toast/Toast"
import { CreatureCategoryInput } from "@/schemas/CreatureSchema"
import toBase64 from "@/helpers/toBase64"

const AddNewCategory: FC = () => {
	const titleRef = useRef<HTMLInputElement | null>(null)
	const descriptionRef = useRef<HTMLTextAreaElement | null>(null)
	const descriptionUARef = useRef<HTMLTextAreaElement | null>(null)
	const fileRef = useRef<HTMLInputElement | null>(null)
	const imageUrlRef = useRef<HTMLInputElement | null>(null)

	const { data, error, mutate, isSuccess, isError, isLoading } =
		api.creature.addCategory.useMutation()

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const title = titleRef.current?.value
		const description = descriptionRef.current?.value
		const descriptionUA = descriptionUARef.current?.value
		const file = fileRef.current?.files?.[0]
		const imageUrl = imageUrlRef.current?.value
		let imageFile: CreatureCategoryInput["imageFile"] | undefined
		if (!title) return

		if (file) {
			imageFile = { base64: await toBase64(file), name: file.name }
		}

		mutate({ title, description, descriptionUA, imageUrl, imageFile })
	}

	return (
		<>
			{isSuccess && (
				<Toast variant="success" message={data?.message || "Created!"} />
			)}
			{isError && (
				<Toast variant="error" message={error.message || "Failed!"} />
			)}
			<form
				onSubmit={onSubmit}
				className="mx-auto flex max-w-sm flex-col items-center gap-3">
				<InputField
					required
					label="Title"
					id="category-title"
					ref={titleRef}
					type="text"
				/>
				<TextAreaField
					ref={descriptionRef}
					title="Description"
					id="description"
					rows={5}
					name="description"
				/>
				<TextAreaField
					ref={descriptionUARef}
					title="Description UA"
					id="description"
					rows={5}
					name="descriptionUA"
				/>
				<div className="w-full">
					<InputImageField
						ref={fileRef}
						id="image_file"
						name="image_file"
						title="Image"
					/>
					<div className="divider mb-0">or</div>
					<InputField
						ref={imageUrlRef}
						id="image_link"
						label="Image link"
						type="text"
					/>
				</div>
				<Button type="submit" variant="success" isLoading={isLoading}>
					Create Category
				</Button>
			</form>
		</>
	)
}

export default AddNewCategory
