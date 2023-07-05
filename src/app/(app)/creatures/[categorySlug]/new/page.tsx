import AddCreatureForm from "@/components/creatures/AddNewCreature/AddCreatureForm"
import { PageProps } from "@/types"

const NewCreaturePage = ({ params }: PageProps<"categorySlug">) => {
	return <AddCreatureForm categorySlug={params.categorySlug} />
}

export default NewCreaturePage
