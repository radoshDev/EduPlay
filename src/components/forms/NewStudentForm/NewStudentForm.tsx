"use client"
import { FC } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "@/utils/api"
import { AddStudentInput, AddStudentSchema } from "@/schemas/StudentSchema"
import ImageSelector from "./ImageSelector/ImageSelector"
import { Alert, InputField } from "@/components/ui"
import { Button } from "@/components/ui/buttons"

type Props = {
	creaturesImage: string[]
}

const NewStudentForm: FC<Props> = ({ creaturesImage }) => {
	const router = useRouter()
	const { mutate, isError, isLoading, error } =
		api.student.addStudent.useMutation({
			onSuccess() {
				router.push("/students")
			},
		})
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<AddStudentInput>({
		defaultValues: { avatar: creaturesImage[0] },
		resolver: zodResolver(AddStudentSchema),
	})

	const onSubmit = handleSubmit(data => {
		mutate(data)
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
						Add
					</Button>
				</div>
			</form>
			{isError && <Alert message={error.message} variant="error" />}
		</>
	)
}

export default NewStudentForm
