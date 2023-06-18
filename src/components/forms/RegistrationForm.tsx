"use client"

import { FC, FormEvent } from "react"
import { useForm, UseFormRegister } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import InputField from "../ui/InputField"
import Button from "../ui/Button"

export const RegisterSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6).max(40),
})

type RegisterSchemaType = z.infer<typeof RegisterSchema>

const RegistrationForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterSchemaType>({
		resolver: zodResolver(RegisterSchema),
	})

	function onSubmit(data: RegisterSchemaType) {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
			<InputField
				title="Email"
				type="email"
				{...register("email")}
				error={errors.email?.message}
			/>
			<InputField
				title="Password"
				type="password"
				{...register("password")}
				error={errors.password?.message}
			/>

			<Button type="submit">Register</Button>
		</form>
	)
}

export default RegistrationForm
