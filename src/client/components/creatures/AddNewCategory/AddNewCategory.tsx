"use client"

import { trpc } from "@/client/config/trpc"
import { FC, FormEvent } from "react"
import InputField from "../../ui/InputField"
import TextAreaField from "../../ui/TextAreaField"
import InputImageField from "../../ui/InputImageField"
import { Button } from "react-bootstrap"
import withTRPC from "@/client/HOC/withTRPC"

const AddNewCategory: FC = () => {
	const { data, mutate } = trpc.creature.newCreature.useMutation()

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		mutate({ id: "1", name: "Test" })
	}
	console.log("AddNewCategory", data)

	return (
		<form onSubmit={onSubmit} className="flex flex-col items-start gap-4">
			<InputField label="Title" id="category-title" type="text" />
			<TextAreaField
				title="Description"
				id="description"
				rows={5}
				name="description"
			/>
			<InputImageField id="image_file" name="image_file" title="Image" />
			<div>------ or -------</div>
			<InputField id="image_link" label="Image link" type="text" />
			<Button type="submit">Create Category</Button>
		</form>
	)
}

export default withTRPC(AddNewCategory)
