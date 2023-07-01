import Link from "next/link"
import { BsPlusCircleFill } from "react-icons/bs"
import { prisma } from "@/server/db"
import PageLayout from "@/components/layouts/PageLayout"
import PageTitle from "@/components/ui/PageTitle/PageTitle"
import ButtonIcon from "@/components/ui/buttons/ButtonIcon"

const CreaturesPage = async () => {
	const creatureCategories = await prisma.creatureCategory.findMany()

	return (
		<PageLayout
			title={<PageTitle title="Creatures" backButton href="/account" />}>
			<div className="grid gap-4">
				{creatureCategories.map(category => (
					<Link href={`/creatures/${category.slug}`} key={category.id}>
						{category.title}
					</Link>
				))}
			</div>
			<div className="text-center">
				<ButtonIcon
					round
					icon={<BsPlusCircleFill size={30} />}
					color="success"
					href="/creatures/new"
				/>
			</div>
		</PageLayout>
	)
}

export default CreaturesPage
