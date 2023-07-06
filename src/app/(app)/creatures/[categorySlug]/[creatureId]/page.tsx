import CreatureInfo from "@/components/creatures/CreatureInfo/CreatureInfo"
import PageLayout from "@/components/layouts/PageLayout"
import PageTitle from "@/components/ui/PageTitle/PageTitle"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import { notFound } from "next/navigation"

const CreaturePage = async ({
	params,
}: PageProps<"creatureId" | "categorySlug">) => {
	const creature = await prisma.creature.findUnique({
		where: { id: params.creatureId },
	})

	if (!creature) notFound()

	return (
		<PageLayout
			title={
				<PageTitle
					title={creature.name}
					backButton
					href={`/creatures/${params.categorySlug}`}
				/>
			}>
			<CreatureInfo creature={creature} />
		</PageLayout>
	)
}

export default CreaturePage
