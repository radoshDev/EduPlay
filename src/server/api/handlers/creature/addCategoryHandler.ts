import { CreatureCategoryInputSchema } from "@/schemas/CreatureSchema"
import { adminProcedure } from "@/server/api/trpc"
import { prisma } from "@/server/db"
import { TRPCError } from "@trpc/server"
import slugify from "slugify"
import { errorHandler } from "../errorHandler"
import uploadImageToStorage from "@/utils/uploadImageToStorage"

const addCategoryHandler = adminProcedure
	.input(CreatureCategoryInputSchema)
	.mutation(async ({ input }) => {
		try {
			const { imageUrl, title, imageFile, ...data } = input
			const slug = slugify(title.toLowerCase())
			const existCategory = await prisma.creatureCategory.findUnique({
				where: { slug },
			})

			if (existCategory) throw new TRPCError({ code: "CONFLICT" })
			let mainImage = ""
			if (imageFile) {
				mainImage = await uploadImageToStorage({
					base64: imageFile.base64,
					bucket: "creatures",
					folder: slug,
					fileName: imageFile.name,
				})
			}
			if (imageUrl) mainImage = imageUrl

			await prisma.creatureCategory.create({
				data: { ...data, slug, title, imageUrl: mainImage },
			})

			return { message: `Category ${title} have been created!` }
		} catch (error) {
			errorHandler(error)
		}
	})

export default addCategoryHandler
