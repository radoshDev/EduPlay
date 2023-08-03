import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { ImportForm, CreatureForm } from "@/components/forms"
import { PageProps } from "@/types"
import { IMPORT_TEMPLATE } from "@/constants"

const NewCreaturePage = ({ params }: PageProps<"categorySlug">) => {
	return (
		<PageLayout
			title={
				<PageTitle
					title="New Creature"
					backButton
					href="."
					afterAction={
						<ImportForm
							action="importCreatures"
							templateLink={IMPORT_TEMPLATE.creatures}
						/>
					}
				/>
			}>
			<CreatureForm action="addCreature" categorySlug={params.categorySlug} />
		</PageLayout>
	)
}

export default NewCreaturePage
