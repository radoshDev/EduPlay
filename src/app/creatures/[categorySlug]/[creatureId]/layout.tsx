import PageLayout from "@/components/layouts/PageLayout"
import PageTitle from "@/components/ui/PageTitle/PageTitle"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"
import { notFound } from "next/navigation"
import { ReactNode } from "react"

type Props = {
	children: ReactNode
} & PageProps<"categorySlug" | "creatureId">

const NewCreatureLayout = async ({ children, params }: Props) => {
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
			{children}
		</PageLayout>
	)
}

export default NewCreatureLayout
