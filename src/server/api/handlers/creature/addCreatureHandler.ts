import { CreatureInputSchema } from "@/schemas/CreatureSchema"
import { adminProcedure } from "../../trpc"
import { prisma } from "@/server/db"
import uploadImageToStorage from "@/utils/uploadImageToStorage"

const addCreatureHandler = adminProcedure
	.input(CreatureInputSchema)
	.mutation(async ({ input }) => {
		const { imageFile, imageUrl, ...data } = input
		let mainImage = ""

		if (imageFile) {
			mainImage = await uploadImageToStorage({
				base64: imageFile.base64,
				bucket: "creatures",
				folder: data.categorySlug,
				fileName: imageFile.name,
			})
		}

		if (imageUrl) mainImage = imageUrl

		return prisma.creature.create({
			data: {
				...data,
				mainImage,
				media: [],
			},
		})
	})

export default addCreatureHandler
