import { CreatureForm } from "@/components/forms"
import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import { notFound } from "next/navigation"

type Props = PageProps<"creatureId">

const EditCreaturePage = async ({ params }: Props) => {
	const creature = await prisma.creature.findUnique({
		where: { id: params.creatureId },
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
