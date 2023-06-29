import PageLayout from "@/components/layouts/PageLayout"
import LoginForm from "@/components/forms/LoginForm"
import PageTitle from "@/components/ui/PageTitle/PageTitle"
import ButtonBack from "@/components/ui/ButtonBack/ButtonBack"

const RegisterPage = () => {
	return (
		<PageLayout
			title={<PageTitle title="Login" navAction={<ButtonBack link="/" />} />}>
			<LoginForm />
		</PageLayout>
	)
}

export default RegisterPage
