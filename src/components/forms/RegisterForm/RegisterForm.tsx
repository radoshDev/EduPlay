"use client"
import { FC } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import toast, { Toaster } from "react-hot-toast"
import { RegisterSchema, type RegisterCred } from "@/schemas/AuthSchema"
import { InputField } from "@/components/ui"
import { api } from "@/utils/api"
import { Button } from "@/components/ui/buttons"

const RegisterForm: FC = () => {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterCred>({
		resolver: zodResolver(RegisterSchema),
	})
	const { isLoading, mutateAsync } = api.register.useMutation({
		onSuccess: handleOnSuccess,
	})

	function handleOnSuccess() {
		setTimeout(() => {
			router.push("/login")
		}, 3000)
	}

	const onSubmit = handleSubmit(userCred => {
		toast.promise(mutateAsync(userCred), {
			loading: "Registering...",
			error: err => err.message || "Problem to register",
			success: "User created!",
		})
	})

	return (
		<>
			<Toaster />
			<form onSubmit={onSubmit} autoComplete="off">
				<InputField
					label="Name"
					type="text"
					{...register("name")}
					error={errors.name?.message}
				/>
				<InputField
					label="Email"
					type="text"
					autoComplete="new-password"
					{...register("email")}
					error={errors.email?.message}
				/>
				<InputField
					label="Password"
					type="password"
					autoComplete="new-password"
					{...register("password")}
					error={errors.password?.message}
				/>
				<Button disabled={isLoading} variant="success" type="submit">
					Register
				</Button>
			</form>
		</>
	)
}

export default RegisterForm
