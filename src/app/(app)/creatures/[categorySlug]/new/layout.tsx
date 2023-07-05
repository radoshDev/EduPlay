import AddManyCreatures from "@/components/creatures/AddNewCreature/AddManyCreatures"
import PageLayout from "@/components/layouts/PageLayout"
import PageTitle from "@/components/ui/PageTitle/PageTitle"
import { PageProps } from "@/types"
import { ReactNode } from "react"

type Props = {
	children: ReactNode
} & PageProps<"categorySlug">

const NewCreatureLayout = ({ children, params }: Props) => {
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
			{children}
		</PageLayout>
	)
}

export default NewCreatureLayout
