import RegistrationForm from "@/client/components/forms/RegistrationForm"
import PageLayout from "@/client/components/layouts/PageLayout"
import { FC } from "react"

const RegisterPage: FC = () => {
	return (
		<PageLayout title="Registration">
			<RegistrationForm />
		</PageLayout>
	)
}

export default RegisterPage
