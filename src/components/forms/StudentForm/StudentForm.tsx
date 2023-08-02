"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "@/utils/api"
import { StudentInput, StudentSchema } from "@/schemas/StudentSchema"
import ImageSelector from "./ImageSelector/ImageSelector"
import { Alert, InputField } from "@/components/ui"
import { Button } from "@/components/ui/buttons"
import { AtLeast } from "@/types"

type Props = {
	creaturesImage: string[]
	action: Extract<keyof typeof api.student, "addStudent" | "updateStudent">
	defaultValues: AtLeast<StudentInput, "avatar">
}

const StudentForm = ({ creaturesImage, action, defaultValues }: Props) => {
	const router = useRouter()
	const { mutate, isError, isLoading, error } = api.student[action].useMutation(
		{
			onSuccess() {
				router.push(
					action === "addStudent"
						? "/students"
						: `/students/${defaultValues.id}`
				)
			},
		}
	)
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<StudentInput>({
		defaultValues,
		resolver: zodResolver(StudentSchema),
	})

	const onSubmit = handleSubmit(data => {
		// @ts-ignore
		mutate({ ...data, id: defaultValues?.id })
	})
	return (
		<>
			<form onSubmit={onSubmit} className="w-full max-w-md">
				<InputField
					label="Name"
					type="text"
					{...register("name")}
					error={errors.name?.message}
				/>
				<div className="mb-4">
					<div className="text-sm">Avatar</div>
					<ImageSelector
						imageDefault={defaultValues.avatar}
						imageUrls={creaturesImage}
						setImage={img => setValue("avatar", img)}
					/>
				</div>
				<div className="text-center">
					<Button
						isLoading={isLoading}
						variant="success"
						type="submit"
						size="sm">
						{action === "addStudent" ? "Add" : "Update"}
					</Button>
				</div>
			</form>
			{isError && <Alert message={error.message} variant="error" />}
		</>
	)
}

export default StudentForm
