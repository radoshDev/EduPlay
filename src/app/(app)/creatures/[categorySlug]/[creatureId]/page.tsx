import CreatureInfo from "@/components/creatures/CreatureInfo/CreatureInfo"
import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { ButtonEdit } from "@/components/ui/buttons"
import { serverApi } from "@/server/api/api"
import { PageProps } from "@/types"
import { notFound } from "next/navigation"

type Props = PageProps<"creatureId", "cb">

const CreaturePage = async ({ params, searchParams }: Props) => {
	const creature = await serverApi.creature.getOneCreature({
		id: params.creatureId,
	})

	if (!creature) notFound()

	const backHref = searchParams?.cb || "."

	return (
		<PageLayout
			title={
				<PageTitle
					title={creature.name}
					backButton
					href={backHref}
					afterAction={<ButtonEdit href={`${params.creatureId}/edit`} />}
				/>
			}>
			<CreatureInfo creature={creature} />
		</PageLayout>
	)
}

export default CreaturePage
