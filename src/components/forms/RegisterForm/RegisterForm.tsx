"use client"
import { FC } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema, type RegisterCred } from "@/schemas/AuthSchema"
import InputField from "@/components/ui/InputField"
import Button from "@/components/ui/Button"
import Toast from "@/components/ui/Toast/Toast"
import { api } from "@/utils/api"

const RegisterForm: FC = () => {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterCred>({
		resolver: zodResolver(RegisterSchema),
	})
	const { isSuccess, isError, isLoading, error, mutate } =
		api.register.useMutation({ onSuccess: handleOnSuccess })

	function handleOnSuccess() {
		setTimeout(() => {
			router.push("/login")
		}, 3000)
	}

	const onSubmit = handleSubmit(async userCred => {
		mutate(userCred)
	})

	return (
		<>
			{isSuccess && <Toast message="User created!" variant="success" />}
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
				{isError && <div className="text-error">{error.message}</div>}
			</form>
		</>
	)
}

export default RegisterForm
