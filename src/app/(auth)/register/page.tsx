import Link from "next/link"
import { redirect } from "next/navigation"
import SocialAuth from "@/components/SocialAuth"
import RegisterForm from "@/components/forms/RegisterForm"
import PageLayout from "@/components/layouts/PageLayout"
import PageTitle from "@/components/ui/PageTitle/PageTitle"
import { getServerAuthSession } from "@/server/auth"
import type { PageProps } from "@/types"

const RegisterPage = async ({
	searchParams,
}: PageProps<string, "callbackUrl">) => {
	const session = await getServerAuthSession()
	if (session) redirect("/students")

	const sParams = new URLSearchParams(searchParams).toString()
	const loginHref = sParams ? `/login?${sParams}` : "/login"

	return (
		<PageLayout title={<PageTitle title="Registration" />}>
			<div className="w-full max-w-md">
				<RegisterForm />
				<div className="divider">or</div>
				<SocialAuth />
				<div className="mt-5">
					Already have an account?{" "}
					<Link href={loginHref} className="link-primary link">
						Login
					</Link>
				</div>
			</div>
		</PageLayout>
	)
}

export default RegisterPage
