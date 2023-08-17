"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import toast, { Toaster } from "react-hot-toast"
import { api } from "@/utils/api"
import { StudentSchema, StudentInput } from "@/schemas/StudentSchema"
import ImageSelector from "./ImageSelector/ImageSelector"
import { InputField, SelectField } from "@/components/ui"
import { Button } from "@/components/ui/buttons"
import { DIFFICULTY_TYPES } from "@/constants"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
	addStudent,
	updateStudent,
} from "@/redux/features/student/studentSlice"

type Props = {
	creaturesImage: string[]
	action: Extract<keyof typeof api.student, "updateStudent" | "addStudent">
}

const StudentForm = ({ creaturesImage, action }: Props) => {
	const isAdding = action === "addStudent"
	const router = useRouter()
	const dispatch = useAppDispatch()
	const student = useAppSelector(s => s.student.currentStudent)
	const { mutateAsync, isLoading } = api.student[action].useMutation({
		onSuccess(data) {
			if (!data) return
			dispatch(isAdding ? addStudent(data) : updateStudent(data))
			router.push(isAdding ? "/students" : `/students/${student?.id}`)
		},
	})
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<StudentInput>({
		defaultValues: (!isAdding && student) || undefined,
		resolver: zodResolver(StudentSchema),
	})

	const onSubmit = handleSubmit(data => {
		toast.promise(
			mutateAsync({
				...data,
				id: student?.id,
			}),
			{
				error: "Failed:(",
				loading: "Processing...",
				success: "Success!",
			}
		)
	})
	return (
		<>
			<Toaster />
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
						imageDefault={student?.avatar || creaturesImage[0]}
						imageUrls={creaturesImage}
						setImage={img => setValue("avatar", img)}
					/>
				</div>
				<SelectField
					label="Difficulty"
					options={DIFFICULTY_TYPES.map((label, i) => ({
						label,
						value: i,
					}))}
					{...register("difficulty", { valueAsNumber: true })}
				/>
				<InputField
					label="Round Length"
					type="number"
					{...register("roundLength", { valueAsNumber: true })}
					error={errors.roundLength?.message}
				/>
				<div className="text-center">
					<Button
						className="mt-6"
						isLoading={isLoading}
						variant="success"
						type="submit"
						size="sm">
						{isAdding ? "Add" : "Update"}
					</Button>
				</div>
			</form>
		</>
	)
}

export default StudentForm
