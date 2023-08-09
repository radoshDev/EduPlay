"use client"
import { FC, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import toast, { Toaster } from "react-hot-toast"
import { InputField } from "@/components/ui"
import { AuthSchema, type AuthUserCred } from "@/schemas/AuthSchema"
import { Button } from "@/components/ui/buttons"

const LoginForm: FC = () => {
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get("callbackUrl")

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthUserCred>({
		resolver: zodResolver(AuthSchema),
	})

	const onSubmit = handleSubmit(async data => {
		const toastId = toast.loading("Loading...")
		try {
			setIsLoading(true)
			const res = await signIn("credentials", { ...data, redirect: false })

			if (res?.error) {
				toast.error(res.error)
				return
			}
			toast.success("Successfully login!")
			router.push(callbackUrl || "/students")
		} catch (error) {
			toast.error("Unexpected error!")
		} finally {
			toast.dismiss(toastId)
			setIsLoading(false)
		}
	})

	return (
		<>
			<Toaster />
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
			</form>
		</>
	)
}

export default LoginForm
