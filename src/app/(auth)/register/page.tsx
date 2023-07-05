import { FC } from "react"
import Link from "next/link"
import SocialAuth from "@/components/SocialAuth"
import RegisterForm from "@/components/forms/RegisterForm"
import PageLayout from "@/components/layouts/PageLayout"
import PageTitle from "@/components/ui/PageTitle/PageTitle"

const RegisterPage: FC = () => {
	return (
		<PageLayout title={<PageTitle title="Registration" />}>
			<div className="w-full max-w-md">
				<RegisterForm />
				<div className="divider">or</div>
				<SocialAuth />
				<div className="mt-5">
					Already have an account?{" "}
					<Link href="/login" className="link-primary link">
						Login
					</Link>
				</div>
			</div>
		</PageLayout>
	)
}

export default RegisterPage
