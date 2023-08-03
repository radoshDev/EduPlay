import { CreatureInputSchema } from "@/schemas/CreatureSchema"
import { adminProcedure } from "../../trpc"
import { prisma } from "@/server/db"
import uploadImageToStorage from "@/utils/uploadImageToStorage"

const updateCreatureHandler = adminProcedure
	.input(CreatureInputSchema)
	.mutation(async ({ input }) => {
		const { imageFile, id, imageUrl, ...data } = input
		let media = ""

		if (imageFile) {
			media = await uploadImageToStorage({
				base64: imageFile.base64,
				bucket: "creatures",
				folder: data.categorySlug,
				fileName: imageFile.name,
			})
		}

		if (imageUrl) media = imageUrl

		return prisma.creature.update({
			where: { id },
			data: {
				...data,
				media: "",
				mainImage: media,
			},
		})
	})

export default updateCreatureHandler
