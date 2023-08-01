import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { ImportForm, NewCreatureForm } from "@/components/forms"
import { PageProps } from "@/types"
import { IMPORT_TEMPLATE } from "@/constants"

const NewCreaturePage = async ({ params }: PageProps<"categorySlug">) => {
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
			<NewCreatureForm categorySlug={params.categorySlug} />
		</PageLayout>
	)
}

export default NewCreaturePage
