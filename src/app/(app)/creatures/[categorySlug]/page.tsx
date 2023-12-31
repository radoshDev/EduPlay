import { notFound } from "next/navigation"
import { PageProps } from "@/types"
import { PageTitle } from "@/components/ui"
import CreaturesList from "@/components/creatures/CreatureList"
import PageLayout from "@/components/layouts/PageLayout"
import { getServerAuthSession } from "@/server/auth"
import { Button, ButtonAdd, ButtonEducation } from "@/components/ui/buttons"
import { serverApi } from "@/server/api/api"

const CreatureCategoryPage = async ({ params }: PageProps<"categorySlug">) => {
	const creaturesCategory = await serverApi.creature.getOneCategory({
		slug: params.categorySlug,
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
					afterAction={<ButtonEducation />}
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
