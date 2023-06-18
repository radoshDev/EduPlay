import { notFound } from "next/navigation"
import { prisma } from "@/config/prisma"
import { PageProps } from "@/types"
import Button from "@/components/ui/Button"
import CreatureList from "@/components/creatures/CreatureList"

const ResultImagesPage = async ({ params }: PageProps<"slug">) => {
	const creaturesCategory = await prisma.creaturesCategories.findUnique({
		where: { slug: params.slug },
	})
	if (!creaturesCategory) notFound()

	return (
		<div className="py-4">
			<div className="container">
				<Button href="/" color="blue">
					До занять
				</Button>
				<h1 className="h1 my-6">{}</h1>
				<CreatureList categoryId={creaturesCategory.id} categoryTitle={creaturesCategory.title} />
			</div>
		</div>
	)
}

export default ResultImagesPage
