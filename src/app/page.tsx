import Link from "next/link"

export default function Home() {
	return (
		<div className="container">
			<h1>Home page!!!</h1>
			<nav className="grid gap-4 text-blue-800">
				<Link href="/creatures">Creatures</Link>
				<Link href="/auth/register">Registration</Link>
				<Link href="/auth/login">Login</Link>
			</nav>
		</div>
	)
}
