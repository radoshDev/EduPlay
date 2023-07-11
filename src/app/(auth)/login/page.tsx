import Link from "next/link"
import { redirect } from "next/navigation"
import SocialAuth from "@/components/SocialAuth/SocialAuth"
import { LoginForm } from "@/components/forms"
import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { getServerAuthSession } from "@/server/auth"
import { PageProps } from "@/types"

const LoginPage = async ({
	searchParams,
}: PageProps<string, "callbackUrl">) => {
	const session = await getServerAuthSession()

	if (session) redirect("/students")

	const sParams = new URLSearchParams(searchParams).toString()
	const registerHref = sParams ? `/register?${sParams}` : "/register"

	return (
		<PageLayout title={<PageTitle title="Login" />}>
			<div className="w-full max-w-md">
				<LoginForm />
				<div className="divider">or</div>
				<SocialAuth />
				<div className="mt-5">
					Does not have ad account?{" "}
					<Link href={registerHref} className="link-primary link">
						Sign Up
					</Link>
				</div>
			</div>
		</PageLayout>
	)
}

export default LoginPage
