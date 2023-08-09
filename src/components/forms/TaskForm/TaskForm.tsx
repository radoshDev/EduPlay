"use client"
import { Form, InputField } from "@/components/ui"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import toast, { Toaster } from "react-hot-toast"
import { TaskForm, TaskSchema } from "@/schemas/TaskSchema"
import { api } from "@/utils/api"
import { Task } from "@prisma/client"
import { AtLeast } from "@/types"
import { Button } from "@/components/ui/buttons"

type Props = {
	taskDefault: AtLeast<Task, "subcategorySlug">
	action: Extract<keyof typeof api.library, "updateTask" | "addTask">
}

const TaskForm = ({ action, taskDefault }: Props) => {
	const { isLoading, mutateAsync } = api.library[action].useMutation()
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<TaskForm>({
		resolver: zodResolver(TaskSchema),
		defaultValues: { ...taskDefault, result: taskDefault.result || undefined },
	})

	const onSubmit = handleSubmit(data => {
		// @ts-ignore
		toast.promise(mutateAsync({ ...data, id: taskDefault.id }), {
			error: err => err.message || "Failed:(",
			loading: "Processing...",
			success: data => data?.message || "Success!",
		})
	})
	return (
		<>
			<Toaster />
			<Form onSubmit={onSubmit}>
				<InputField
					label="Value"
					{...register("value")}
					error={errors.value?.message}
				/>
				<InputField
					label="Result"
					{...register("result")}
					error={errors.result?.message}
				/>
				<InputField
					label="Subcategory"
					{...register("subcategorySlug")}
					disabled
				/>
				<Button variant="success" type="submit" isLoading={isLoading}>
					{action === "updateTask" ? "Update" : "Add"}
				</Button>
			</Form>
		</>
	)
}

export default TaskForm
