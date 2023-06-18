"use client"

import Button from "@/components/ui/Button"
import InputField from "@/components/ui/InputField"
import InputImageField from "@/components/ui/InputImageField"
import TextAreaField from "@/components/ui/TextAreaField"
import axios from "axios"
import { FC, FormEvent, useTransition } from "react"

const AddNewCategory: FC = () => {
	const [isPending, startTransition] = useTransition()

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const formEl = e.target as HTMLFormElement
		const formData = new FormData(formEl)
		const formJson = Object.fromEntries(formData.entries())
		startTransition(async () => {
			const response = await axios.post("/api/creature/category", formData)

			console.log(response)
		})
	}
	return (
		<form onSubmit={onSubmit} className="flex flex-col items-start gap-4">
			<InputField
				required
				id="category-title"
				title="Title"
				type="text"
				name="title"
			/>
			<TextAreaField
				title="Description"
				id="description"
				rows={5}
				name="description"
			/>
			<InputImageField id="image_file" name="image_file" title="Image" />
			<div>------ or -------</div>
			<InputField
				id="image_link"
				title="Image link"
				type="text"
				name="image_link"
			/>
			<Button type="submit">Create Category</Button>
		</form>
	)
}

export default AddNewCategory
