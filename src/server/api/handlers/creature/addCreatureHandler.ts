import { CreatureAddSchema } from "@/schemas/CreatureSchema"
import { protectedProcedure } from "../../trpc"
import { prisma } from "@/server/db"
import uploadImageToStorage from "@/utils/uploadImageToStorage"

const addCreatureHandler = protectedProcedure
	.input(CreatureAddSchema)
	.mutation(async ({ input }) => {
		const {
			categorySlug,
			description,
			descriptionUA,
			imageFile,
			imageUrl,
			name,
		} = input
		let media = ""
		if (imageFile) {
			media = await uploadImageToStorage({
				base64: imageFile.base64,
				bucket: "creatures",
				folder: categorySlug,
				fileName: imageFile.name,
			})
		}
		if (imageUrl) media = imageUrl
		return prisma.creature.create({
			data: { name, categorySlug, description, descriptionUA, media },
		})
	})

export default addCreatureHandler
