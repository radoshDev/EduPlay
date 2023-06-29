"use client"

import { FC } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import InputField from "../ui/InputField"
import Button from "../ui/Button"
import { AuthSchema, type AuthUserCred } from "@/schemas/AuthSchema"
import { api } from "@/utils/api"
import withTRPC from "@/HOC/withTRPC"
import Alert from "../ui/Alert/Alert"

const RegistrationForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthUserCred>({
		resolver: zodResolver(AuthSchema),
	})

	const { mutate, isLoading, isSuccess, isError, error } =
		api.register.useMutation()

	async function onSubmit(usersData: AuthUserCred) {
		mutate(usersData)
	}

	return (
		<>
			{isSuccess && <Alert variant="success" message="User created" />}
			{isError && <Alert variant="error" message={error.message} />}
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputField
					label="Email"
					type="email"
					{...register("email")}
					error={errors.email?.message}
				/>
				<InputField
					label="Password"
					type="password"
					{...register("password")}
					error={errors.password?.message}
				/>

				<Button
					type="submit"
					className="mt-3"
					variant="primary"
					isLoading={isLoading}>
					Register
				</Button>
			</form>
		</>
	)
}

export default withTRPC(RegistrationForm)
