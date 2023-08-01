import { notFound } from "next/navigation"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import { PageTitle } from "@/components/ui"
import CreaturesList from "@/components/creatures/CreatureList"
import PageLayout from "@/components/layouts/PageLayout"
import { getServerAuthSession } from "@/server/auth"
import { Button, ButtonAdd } from "@/components/ui/buttons"

const CreatureCategoryPage = async ({ params }: PageProps<"categorySlug">) => {
	const creaturesCategory = await prisma.creatureCategory.findUnique({
		where: { slug: params.categorySlug },
	})
	if (!creaturesCategory) notFound()

	const session = await getServerAuthSession()
	const isAdmin = session?.user.role === "admin"
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
			<div className="flex flex-1 flex-col items-center">
				{creaturesCategory.sourceLink && (
					<Button
						variant="warning"
						size="sm"
						href={creaturesCategory.sourceLink}
						target="_blank">
						Source
					</Button>
				)}
				<CreaturesList
					categorySlug={creaturesCategory.slug}
					categoryTitle={creaturesCategory.title}
				/>
				{isAdmin && (
					<ButtonAdd href={`/creatures/${creaturesCategory.slug}/new`} />
				)}
			</div>
		</PageLayout>
	)
}

export default CreatureCategoryPage
