import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
	req => {
		const token = req.nextauth.token
		const { pathname } = req.nextUrl
		if (pathname.search(/\/(new|edit)$/g) !== -1 && token?.role !== "admin") {
			const url = req.nextUrl.clone()
			url.pathname = "/404"
			return NextResponse.rewrite(url)
		}
	},
	{
		callbacks: {
			authorized: ({ token }) => {
				return !!token
			},
		},
	}
)

export const config = {
	matcher: [
		"/((?!register|api|login|manifest|icon|education/unknown/coins).{1,})",
	],
}
