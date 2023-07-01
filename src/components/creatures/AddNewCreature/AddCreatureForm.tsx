"use client"

import Button from "@/components/ui/Button"
import InputField from "@/components/ui/InputField"
import InputImageField from "@/components/ui/InputImageField"
import { FC, FormEvent } from "react"

type Props = {
	categorySlug: string
}

const AddCreatureForm: FC<Props> = ({ categorySlug }) => {
	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
	}
	return (
		<>
			<form onSubmit={handleSubmit} className="mx-auto max-w-sm text-center">
				<InputField label="Name" type="text" required />
				<InputField label="Category" value={categorySlug} disabled />
				<div className="mb-5">
					<InputImageField title="Image" />
					<div className="divider mb-0">or</div>
					<InputField label="Image URL" />
				</div>
				<Button type="submit" variant="success">
					Create
				</Button>
			</form>
		</>
	)
}

export default AddCreatureForm
