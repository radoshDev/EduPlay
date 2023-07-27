import CreatureInfo from "@/components/creatures/CreatureInfo/CreatureInfo"
import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import { notFound } from "next/navigation"

type Props = PageProps<"creatureId" | "categorySlug", "cb">

const CreaturePage = async ({ params, searchParams }: Props) => {
	const creature = await prisma.creature.findUnique({
		where: { id: params.creatureId },
	})

	if (!creature) notFound()

	const backHref = searchParams?.cb || `/creatures/${params.categorySlug}`

	return (
		<PageLayout
			title={<PageTitle title={creature.name} backButton href={backHref} />}>
			<CreatureInfo creature={creature} />
		</PageLayout>
	)
}

export default CreaturePage
