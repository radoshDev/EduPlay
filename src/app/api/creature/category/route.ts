import { creaturesCategories as CreatureCategory } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

type RequestBody = {
	title: string
	description: string
	image_file: string
	image_url: string
}

export async function POST(req: NextRequest) {
	try {
		const body = await req.formData()
		console.log(body)
		return NextResponse.json({
			message: `Creature category 'NAME' crated!`,
		})
	} catch (error) {
		console.log(error)

		return NextResponse.json(
			{ error: "Problem to do request" },
			{ status: 500 }
		)
	}
}
