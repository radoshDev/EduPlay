"use client"

import { FC, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import InputField from "../ui/InputField"
import Button from "../ui/Button"
import { AuthSchema, type AuthUserCred } from "@/schemas/AuthSchema"
import Alert from "../ui/Alert/Alert"

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

	async function githubLogin() {
		try {
			setLoginData({ isLoading: true, errorMessage: "" })
			const res = await signIn("github", {
				callbackUrl: "/",
			})
			console.log(res)
		} catch (error) {
			setLoginData({ isLoading: false, errorMessage: "Problem to login" })
		}
	}

	return (
		<>
			{errorMessage && <Alert variant="error" message={errorMessage} />}
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
					className="btn-sm mt-2"
					disabled={isLoading}
					variant="primary">
					Sign In
				</Button>
			</form>
			<div className="divider">Login with other services</div>
			<div className="flex gap-2">
				<Button variant="neutral" className="btn-sm" onClick={githubLogin}>
					Github
				</Button>
				<Button variant="success" className="btn-sm">
					Google
				</Button>
				<Button variant="info" className="btn-sm">
					Apple
				</Button>
			</div>
		</>
	)
}

export default LoginForm
