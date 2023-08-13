import { TaskSubcategoryInputSchema } from "@/schemas/TaskSchema"
import { adminProcedure } from "../../trpc"
import { errorHandler } from "../errorHandler"
import { prisma } from "@/server/db"
import slugify from "slugify"
import { TRPCError } from "@trpc/server"
import uploadImageToStorage from "@/utils/uploadImageToStorage"

export const addTaskSubcategoryHandler = adminProcedure
	.input(TaskSubcategoryInputSchema)
	.mutation(async ({ input }) => {
		try {
			const { title, imageFile, imageUrl, parentSlug, ...data } = input
			const slug = slugify(title.toLowerCase())
			const existSubcategory = await prisma.taskSubCategory.findUnique({
				where: { slug },
			})

			if (existSubcategory) throw new TRPCError({ code: "CONFLICT" })
			let media = ""
			if (imageFile) {
				media = await uploadImageToStorage({
					base64: imageFile.base64,
					bucket: "tasks",
					folder: `${parentSlug}/${slug}`,
					fileName: imageFile.name,
				})
			}
			if (imageUrl) media = imageUrl

			await prisma.taskSubCategory.create({
				data: { imageUrl: media, slug, title, parentSlug, ...data },
			})
			return { message: `Task subcategory ${title} have been created!` }
		} catch (error) {
			errorHandler(error)
		}
	})
