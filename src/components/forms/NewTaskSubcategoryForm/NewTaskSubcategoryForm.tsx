"use client"
import { Form, InputField, InputImageField, Toast } from "@/components/ui"
import { Button } from "@/components/ui/buttons"
import toBase64 from "@/helpers/toBase64"
import { ImageFile } from "@/schemas/RootSchema"
import {
	TaskSubcategoryForm,
	TaskSubcategoryFormSchema,
} from "@/schemas/TaskSchema"
import { api } from "@/utils/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

type Props = {
	parentSlug: string
}

const NewTaskSubcategoryForm = ({ parentSlug }: Props) => {
	const { isLoading, isError, isSuccess, error, mutate, data } =
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
		mutate({ ...data, parentSlug, imageFile })
	})
	return (
		<>
			{isSuccess && (
				<Toast variant="success" message={data?.message || "Created!"} />
			)}
			{isError && (
				<Toast variant="error" message={error.message || "Failed!"} />
			)}
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
				<Button isLoading={isLoading} variant="success" type="submit">
					Create
				</Button>
			</Form>
		</>
	)
}

export default NewTaskSubcategoryForm
