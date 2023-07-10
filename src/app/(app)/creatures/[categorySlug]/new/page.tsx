import { notFound } from "next/navigation"
import { getServerAuthSession } from "@/server/auth"
import AddManyCreatures from "@/components/creatures/NewCreature/AddManyCreatures"
import PageLayout from "@/components/layouts/PageLayout"
import PageTitle from "@/components/ui/PageTitle/PageTitle"
import NewCreatureForm from "@/components/forms/NewCreatureForm"
import { PageProps } from "@/types"

const NewCreaturePage = async ({ params }: PageProps<"categorySlug">) => {
	const session = await getServerAuthSession()
	if (session?.user.role !== "admin") notFound()

	return (
		<PageLayout
			title={
				<PageTitle
					title="New Creature"
					backButton
					href={`/creatures/${params.categorySlug}`}
					afterAction={<AddManyCreatures />}
				/>
			}>
			<NewCreatureForm categorySlug={params.categorySlug} />
		</PageLayout>
	)
}

export default NewCreaturePage
