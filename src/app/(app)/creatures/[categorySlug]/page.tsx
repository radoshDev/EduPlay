import { notFound } from "next/navigation"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import Button from "@/components/ui/Button"
import CreaturesList from "@/components/creatures/CreatureList"
import PageLayout from "@/components/layouts/PageLayout"
import PageTitle from "@/components/ui/PageTitle/PageTitle"
import AddCreatureButton from "@/components/creatures/AddNewCreature/AddCreatureButton"

const CreatureCategoryPage = async ({ params }: PageProps<"categorySlug">) => {
	const creaturesCategory = await prisma.creatureCategory.findUnique({
		where: { slug: params.categorySlug },
	})
	if (!creaturesCategory) notFound()

	return (
		<PageLayout
			title={
				<PageTitle
					title={creaturesCategory.title}
					backButton
					href="/creatures"
					afterAction={
						<Button href="/" variant="primary" size="sm">
							До занять
						</Button>
					}
				/>
			}>
			<div className="flex flex-col">
				<CreaturesList
					categorySlug={creaturesCategory.slug}
					categoryTitle={creaturesCategory.title}
				/>
				<AddCreatureButton categorySlug={creaturesCategory.slug} />
			</div>
		</PageLayout>
	)
}

export default CreatureCategoryPage
