"use client"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import toast, { Toaster } from "react-hot-toast"
import { TaskCategoryForm, TaskCategoryFormSchema } from "@/schemas/TaskSchema"
import { Form, InputField, InputImageField } from "@/components/ui"
import { api } from "@/utils/api"
import { ImageFile } from "@/schemas/RootSchema"
import toBase64 from "@/helpers/toBase64"
import { Button } from "@/components/ui/buttons"

const NewTaskCategoryForm: FC = () => {
	const { isLoading, mutateAsync } = api.library.addTaskCategory.useMutation()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TaskCategoryForm>({
		resolver: zodResolver(TaskCategoryFormSchema),
	})

	const onSubmit = handleSubmit(async data => {
		const file = data.imageFile?.[0]
		let imageFile: ImageFile | undefined
		if (file) {
			imageFile = { base64: await toBase64(file), name: file.name }
		}
		toast.promise(mutateAsync({ ...data, imageFile }), {
			loading: "Creating...",
			error: err => err.message || "Failed:(",
			success: data => data?.message || "Category created!",
		})
	})

	return (
		<>
			<Toaster />
			<Form onSubmit={onSubmit}>
				<InputField
					label="Category Title"
					{...register("title")}
					error={errors.title?.message}
				/>
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

export default NewTaskCategoryForm
