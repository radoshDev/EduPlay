import { CreatureForm } from "@/components/forms"
import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { serverApi } from "@/server/api/api"
import { PageProps } from "@/types"
import { notFound } from "next/navigation"

type Props = PageProps<"creatureId">

const EditCreaturePage = async ({ params }: Props) => {
	const creature = await serverApi.creature.getOneCreature({
		id: params.creatureId,
	})

	if (!creature) notFound()

	return (
		<PageLayout title={<PageTitle title="Edit Creature" backButton href="." />}>
			<CreatureForm
				action="updateCreature"
				defaultValues={creature}
				categorySlug={creature.categorySlug}
			/>
		</PageLayout>
	)
}

export default EditCreaturePage
