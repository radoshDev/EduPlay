import { auth } from "@/config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
	const formData = await req.formData()
	const email = formData.get("email")
	const password = formData.get("password")

	if (typeof email !== "string" || typeof password !== "string")
		return NextResponse.json({ error: "Invalid field type" })

	if (!email || !password)
		return NextResponse.json({ error: "Email and password are required!" })

	const userCred = await createUserWithEmailAndPassword(auth, email, password)
	console.log(userCred)

	return NextResponse.json({
		message: `User: '${userCred.user.email}' created!`,
	})
}
