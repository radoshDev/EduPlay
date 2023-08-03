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
import toBase64 from "@/helpers/toBase64"
import { CreatureForm, CreatureFormSchema } from "@/schemas/CreatureSchema"
import { api } from "@/utils/api"
import { ImageFile } from "@/schemas/RootSchema"
import { Button } from "@/components/ui/buttons"
import { Creature } from "@prisma/client"

type Props = {
	action: Extract<keyof typeof api.creature, "addCreature" | "updateCreature">
	categorySlug: string
	defaultValues?: Partial<Creature>
}

const CreatureForm = ({ action, categorySlug, defaultValues }: Props) => {
	const { mutate, isSuccess, isError, error, isLoading } =
		api.creature[action].useMutation()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreatureForm>({
		resolver: zodResolver(CreatureFormSchema),
		defaultValues: {
			...defaultValues,
			imageUrl: defaultValues?.mainImage,
			description: defaultValues?.description ?? undefined,
			source: defaultValues?.source ?? undefined,
		},
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
			{isSuccess && (
				<Toast
					message={`Creature ${
						action === "addCreature" ? "added" : "updated"
					}!`}
					variant="success"
				/>
			)}
			{isError && (
				<Toast variant="error" message={error.message || `Failed:("`} />
			)}
			<Form onSubmit={onSubmit}>
				<InputField
					label="Name"
					{...register("name")}
					error={errors.name?.message}
				/>
				<InputField
					label="Source"
					{...register("source")}
					error={errors.source?.message}
				/>
				<TextAreaField
					label="Description"
					rows={5}
					{...register("description")}
					error={errors.description?.message}
				/>
				<InputField label="Category" value={categorySlug} disabled />
				<div className="mb-4 w-full rounded-md bg-slate-200 p-1">
					<InputImageField
						label="Main image file"
						{...register("imageFile")}
						error={errors.imageFile?.message}
					/>
					<div className="divider mb-0">or</div>
					<InputField
						label="Main image link"
						{...register("imageUrl")}
						error={errors.imageUrl?.message}
					/>
				</div>
				<div>
					<div>Media</div>
				</div>
				<Button isLoading={isLoading} type="submit" variant="success">
					{action === "addCreature" ? "Create" : "Update"}
				</Button>
			</Form>
		</>
	)
}

export default CreatureForm
