import RegistrationForm from "@/components/forms/RegistrationForm"
import PageLayout from "@/components/layouts/PageLayout"
import ButtonBack from "@/components/ui/ButtonBack/ButtonBack"
import PageTitle from "@/components/ui/PageTitle/PageTitle"
import { FC } from "react"

const RegisterPage: FC = () => {
	return (
		<PageLayout
			title={
				<PageTitle title="Registration" navAction={<ButtonBack link="/" />} />
			}>
			<RegistrationForm />
		</PageLayout>
	)
}

export default RegisterPage
