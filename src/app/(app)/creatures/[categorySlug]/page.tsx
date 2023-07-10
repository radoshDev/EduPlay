import { notFound } from "next/navigation"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import Button from "@/components/ui/Button"
import CreaturesList from "@/components/creatures/CreatureList"
import PageLayout from "@/components/layouts/PageLayout"
import PageTitle from "@/components/ui/PageTitle/PageTitle"
import { getServerAuthSession } from "@/server/auth"
import ButtonAdd from "@/components/ui/buttons/ButtonAdd"

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
