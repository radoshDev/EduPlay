"use client"

import { FC } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Form from "react-bootstrap/Form"
import InputField from "../ui/InputField"
import Button from "../ui/Button"
import { AuthSchema, type AuthUserCred } from "@/schemas/AuthSchema"
import { trpc } from "@/client/config/trpc"
import withTRPC from "@/client/HOC/withTRPC"
import { Alert } from "react-bootstrap"

const RegistrationForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthUserCred>({
		resolver: zodResolver(AuthSchema),
	})

	const { data, mutate, isLoading, isSuccess, isError, error } =
		trpc.register.useMutation()

	async function onSubmit(usersData: AuthUserCred) {
		mutate(usersData)
	}

	return (
		<>
			{isSuccess && <Alert variant="success">User created</Alert>}
			{isError && <Alert variant="danger">{error.message}</Alert>}
			<Form onSubmit={handleSubmit(onSubmit)}>
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

				<Button type="submit" size="sm" isLoading={isLoading}>
					Register
				</Button>
			</Form>
		</>
	)
}

export default withTRPC(RegistrationForm)
