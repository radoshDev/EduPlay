"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import toast, { Toaster } from "react-hot-toast"
import {
	Form,
	InputField,
	InputImageField,
	TextAreaField,
} from "@/components/ui"
import { Button } from "@/components/ui/buttons"
import { api } from "@/utils/api"
import {
	CreatureCategoryForm,
	CreatureCategoryFormSchema,
} from "@/schemas/CreatureSchema"
import toBase64 from "@/helpers/toBase64"
import { ImageFile } from "@/schemas/RootSchema"

const NewCreatureCategoryForm = () => {
	const { mutateAsync, isLoading } = api.creature.addCategory.useMutation()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreatureCategoryForm>({
		resolver: zodResolver(CreatureCategoryFormSchema),
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
					label="Title"
					{...register("title")}
					error={errors.title?.message}
				/>
				<InputField
					label="Source"
					{...register("sourceLink")}
					error={errors.sourceLink?.message}
				/>
				<TextAreaField
					label="Description"
					rows={5}
					{...register("description")}
					error={errors.description?.message}
				/>
				<div className="my-4 w-full rounded-md bg-slate-100 p-1">
					<InputImageField
						label="Image"
						{...register("imageFile")}
						error={errors.imageFile?.message}
					/>
					<div className="divider mb-0">or</div>
					<InputField
						label="Image link"
						{...register("imageUrl")}
						error={errors.imageUrl?.message}
					/>
				</div>
				<Button type="submit" variant="success" isLoading={isLoading}>
					Create Category
				</Button>
			</Form>
		</>
	)
}

export default NewCreatureCategoryForm
