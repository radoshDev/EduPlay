"use client"

import { FC, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import Form from "react-bootstrap/Form"
import InputField from "../ui/InputField"
import Button from "../ui/Button"
import { AuthSchema, type AuthUserCred } from "@/schemas/AuthSchema"
import { Alert } from "react-bootstrap"

const LoginForm: FC = () => {
	const [{ errorMessage, isLoading }, setLoginData] = useState({
		errorMessage: "",
		isLoading: false,
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthUserCred>({
		resolver: zodResolver(AuthSchema),
	})

	async function onSubmit(usersData: AuthUserCred) {
		try {
			setLoginData({ isLoading: true, errorMessage: "" })
			const res = await signIn("credentials", {
				...usersData,
				callbackUrl: "/",
			})
			console.log(res)
		} catch (error) {
			setLoginData({ isLoading: false, errorMessage: "Problem to login" })
		}
	}

	return (
		<>
			{errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
			<Form onSubmit={handleSubmit(onSubmit)} className="my_form">
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
					Sign In
				</Button>
			</Form>
		</>
	)
}

export default LoginForm
