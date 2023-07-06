"use client"
import { FC, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Button from "@/components/ui/Button"
import InputField from "@/components/ui/InputField"
import { AuthSchema, type AuthUserCred } from "@/schemas/AuthSchema"

const LoginForm: FC = () => {
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get("callbackUrl")

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<AuthUserCred>({
		resolver: zodResolver(AuthSchema),
	})

	const onSubmit = handleSubmit(async data => {
		try {
			setIsLoading(true)
			const res = await signIn("credentials", { ...data, redirect: false })

			if (res?.error) {
				setError("root", { message: res.error })
				return
			}
			router.push(callbackUrl || "/students")
		} catch (error) {
			setError("root", { message: "Unexpected error!" })
		} finally {
			setIsLoading(false)
		}
	})

	return (
		<form onSubmit={onSubmit}>
			<InputField
				label="Email"
				type="text"
				autoComplete="email"
				{...register("email")}
				error={errors.email?.message}
			/>
			<InputField
				label="Password"
				type="password"
				autoComplete="current-password"
				{...register("password")}
				error={errors.password?.message}
			/>
			<Button
				disabled={isLoading}
				isLoading={isLoading}
				variant="success"
				type="submit">
				Sign In
			</Button>
			{errors.root && <div className="text-error">{errors.root.message}</div>}
		</form>
	)
}

export default LoginForm
