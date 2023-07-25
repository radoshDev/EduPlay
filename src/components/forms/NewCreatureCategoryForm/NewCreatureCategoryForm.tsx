"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
	Form,
	InputField,
	InputImageField,
	TextAreaField,
	Toast,
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
	const { data, error, mutate, isSuccess, isError, isLoading } =
		api.creature.addCategory.useMutation()

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

		mutate({ ...data, imageFile })
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
				<TextAreaField
					label="Description"
					rows={5}
					{...register("description")}
					error={errors.description?.message}
				/>
				<TextAreaField
					label="Description UA"
					rows={5}
					{...register("descriptionUA")}
					error={errors.descriptionUA?.message}
				/>
				<div className="w-full">
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
