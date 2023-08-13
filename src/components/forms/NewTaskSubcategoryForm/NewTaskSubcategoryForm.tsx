"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"
import { Form, InputField, InputImageField, SelectField } from "@/components/ui"
import { Button } from "@/components/ui/buttons"
import toBase64 from "@/helpers/toBase64"
import { ImageFile } from "@/schemas/RootSchema"
import {
	TaskSubcategoryForm,
	TaskSubcategoryFormSchema,
} from "@/schemas/TaskSchema"
import { api } from "@/utils/api"
import { DIFFICULTY_TYPES } from "@/constants"

type Props = {
	parentSlug: string
}

const NewTaskSubcategoryForm = ({ parentSlug }: Props) => {
	const { isLoading, mutateAsync } =
		api.library.addTaskSubcategory.useMutation()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TaskSubcategoryForm>({
		resolver: zodResolver(TaskSubcategoryFormSchema),
	})
	const onSubmit = handleSubmit(async data => {
		const file = data.imageFile?.[0]
		let imageFile: ImageFile | undefined
		if (file) {
			imageFile = { base64: await toBase64(file), name: file.name }
		}

		toast.promise(mutateAsync({ ...data, parentSlug, imageFile }), {
			loading: "Creating...",
			error: "Failed😢",
			success: data => data?.message || "Subcategory created!",
		})
	})
	return (
		<>
			<Toaster />
			<Form onSubmit={onSubmit}>
				<InputField
					label="Title"
					{...register("title")}
					error={errors.title?.message}
				/>
				<InputField label="Parent slug" disabled value={parentSlug} />
				<div className="w-full">
					<InputImageField
						label="Image file"
						{...register("imageFile")}
						error={errors.imageFile?.message as string}
					/>
					<div className="divider mb-0">or</div>
					<InputField
						label="Image link"
						{...register("imageUrl")}
						error={errors.imageUrl?.message}
					/>
				</div>
				<SelectField
					label="Difficulty"
					options={DIFFICULTY_TYPES.map((label, i) => ({
						label,
						value: i,
					}))}
					{...register("difficulty", { valueAsNumber: true })}
				/>
				<Button
					className="mt-6"
					isLoading={isLoading}
					variant="success"
					type="submit">
					Create
				</Button>
			</Form>
		</>
	)
}

export default NewTaskSubcategoryForm
