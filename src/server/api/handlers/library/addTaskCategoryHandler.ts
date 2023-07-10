import slugify from "slugify"
import { prisma } from "@/server/db"
import { TRPCError } from "@trpc/server"
import { TaskCategoryInputSchema } from "@/schemas/TaskSchema"
import uploadImageToStorage from "@/utils/uploadImageToStorage"
import { adminProcedure } from "../../trpc"
import { errorHandler } from "../errorHandler"

export const addTaskCategoryHandler = adminProcedure
	.input(TaskCategoryInputSchema)
	.mutation(async ({ input }) => {
		try {
			const { title, imageFile, imageUrl } = input
			const slug = slugify(title.toLowerCase())
			const existCategory = await prisma.creatureCategory.findUnique({
				where: { slug },
			})

			if (existCategory) throw new TRPCError({ code: "CONFLICT" })
			let media = ""
			if (imageFile) {
				media = await uploadImageToStorage({
					base64: imageFile.base64,
					bucket: "creatures",
					folder: slug,
					fileName: imageFile.name,
				})
			}
			if (imageUrl) media = imageUrl

			await prisma.taskCategory.create({
				data: { imageUrl: media, slug, title },
			})
			return { message: `Task category ${title} have been created!` }
		} catch (error) {
			errorHandler(error)
		}
	})
