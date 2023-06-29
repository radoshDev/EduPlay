import Link from "next/link"
import { BsPlusCircleFill } from "react-icons/bs"
import IconButton from "@/components/ui/IconButton"
import { prisma } from "@/server/db"
import PageLayout from "@/components/layouts/PageLayout"
import PageTitle from "@/components/ui/PageTitle/PageTitle"
import ButtonBack from "@/components/ui/ButtonBack/ButtonBack"

const CreaturesPage = async () => {
	const creatureCategories = await prisma.creatureCategory.findMany()
	console.log("creatureCategories", creatureCategories)

	return (
		<PageLayout
			title={
				<PageTitle title="Creatures" navAction={<ButtonBack link="/" />} />
			}>
			<div className="grid gap-4">
				{creatureCategories.map(category => (
					<Link href={`/${category.slug}`} key={category.id}>
						{category.title}
					</Link>
				))}
			</div>
			<Link href="/creatures/new">
				<IconButton icon={<BsPlusCircleFill size={24} />} />
			</Link>
		</PageLayout>
	)
}

export default CreaturesPage
