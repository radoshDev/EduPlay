import Link from "next/link"
import SocialAuth from "@/components/SocialAuth/SocialAuth"
import LoginForm from "@/components/forms/LoginForm"
import PageLayout from "@/components/layouts/PageLayout"
import PageTitle from "@/components/ui/PageTitle/PageTitle"

const LoginPage = () => {
	return (
		<PageLayout title={<PageTitle title="Login" />}>
			<div className="w-full max-w-md">
				<LoginForm />
				<div className="divider">or</div>
				<SocialAuth />
				<div className="mt-5">
					Does not have ad account?{" "}
					<Link href="/register" className="link-primary link">
						Sign Up
					</Link>
				</div>
			</div>
		</PageLayout>
	)
}

export default LoginPage
