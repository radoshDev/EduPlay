import { PageProps } from "@/types"

const CreaturePage = async ({ params }: PageProps<"creatureSlug">) => {
	return <div>CreaturePage {params.creatureSlug}</div>
}

export default CreaturePage
