"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Form from "@/components/ui/Form"
import Button from "@/components/ui/Button"
import InputField from "@/components/ui/InputField"
import InputImageField from "@/components/ui/InputImageField"
import TextAreaField from "@/components/ui/TextAreaField"
import Toast from "@/components/ui/Toast"
import toBase64 from "@/helpers/toBase64"
import { CreatureForm, CreatureFormSchema } from "@/schemas/CreatureSchema"
import { api } from "@/utils/api"
import { ImageFile } from "@/schemas/RootSchema"

type Props = {
	categorySlug: string
}

const AddCreatureForm = ({ categorySlug }: Props) => {
	const { mutate, isSuccess, isError, error, isLoading } =
		api.creature.addCreature.useMutation()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreatureForm>({
		resolver: zodResolver(CreatureFormSchema),
	})

	const onSubmit = handleSubmit(async data => {
		const file = data.imageFile?.[0]
		let imageFile: ImageFile | undefined

		if (file) {
			imageFile = { base64: await toBase64(file), name: file.name }
		}

		mutate({ ...data, imageFile, categorySlug })
	})

	return (
		<>
			{isSuccess && <Toast message="Creature added!" variant="success" />}
			{isError && (
				<Toast variant="error" message={error.message || "Failed to add"} />
			)}
			<Form onSubmit={onSubmit}>
				<InputField
					label="Name"
					{...register("name")}
					error={errors.name?.message}
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
				<InputField label="Category" value={categorySlug} disabled />
				<div className="w-full">
					<InputImageField
						label="Image file"
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
				<Button isLoading={isLoading} type="submit" variant="success">
					Create
				</Button>
			</Form>
		</>
	)
}

export default AddCreatureForm
