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
import toBase64 from "@/helpers/toBase64"
import {
	CreatureForm,
	CreatureFormSchema,
	CreatureInput,
} from "@/schemas/CreatureSchema"
import { api } from "@/utils/api"
import { ImageFile } from "@/schemas/RootSchema"
import { Button } from "@/components/ui/buttons"
import { Creature } from "@prisma/client"
import MediaBlock from "./MediaBlock/MediaBlock"

type Props = {
	action: Extract<keyof typeof api.creature, "addCreature" | "updateCreature">
	categorySlug: string
	defaultValues?: Partial<Creature>
}

const CreatureForm = ({ action, categorySlug, defaultValues }: Props) => {
	const { isLoading, mutateAsync } = api.creature[action].useMutation()

	const {
		register,
		getValues,
		setValue,
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
		const newData: CreatureInput = {
			...data,
			imageFile,
			categorySlug,
			media: data.media || [],
		}
		toast.promise(mutateAsync(newData), {
			loading: `${action === "addCreature" ? "Adding" : "Updating"}...`,
			error: err =>
				err.message ||
				`Could not ${action === "addCreature" ? "add" : "update"}`,
			success: `Creature ${action === "addCreature" ? "added" : "updated"}`,
		})
	})

	function setMedia(values: string[]) {
		setValue("media", values)
	}

	function setMainImage(newMainImage: string) {
		setValue("imageUrl", newMainImage)
	}

	return (
		<>
			<Toaster />
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
				<MediaBlock
					setMedia={setMedia}
					mainImage={getValues("imageUrl")}
					setMainImage={setMainImage}
					defaultValues={getValues("media")}
				/>
				<Button
					className="mt-4"
					isLoading={isLoading}
					type="submit"
					variant="success">
					{action === "addCreature" ? "Create" : "Update"}
				</Button>
			</Form>
		</>
	)
}

export default CreatureForm
