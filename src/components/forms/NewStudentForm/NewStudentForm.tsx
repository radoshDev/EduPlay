"use client"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "@/utils/api"
import { AddStudentInput, AddStudentSchema } from "@/schemas/StudentSchema"
import InputField from "@/components/ui/InputField"
import ImageSelector from "./ImageSelector/ImageSelector"
import Button from "@/components/ui/Button"
import Alert from "@/components/ui/Alert/Alert"

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
