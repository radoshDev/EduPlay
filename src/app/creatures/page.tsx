import Link from "next/link"
import { AiOutlinePlusCircle } from "react-icons/ai"
import IconButton from "@/components/ui/IconButton"
import { prisma } from "@/config/prisma"

const CreaturesPage = async () => {
	const creatureCategories = await prisma.creaturesCategories.findMany()
	return (
		<div className="container">
			<h1>Істоти</h1>
			<div className="grid gap-4">
				{creatureCategories.map(category => (
					<Link href={`/${category.slug}`} key={category.id}>
						{category.title}
					</Link>
				))}
			</div>
			<Link href="/creatures/new">
				<IconButton icon={<AiOutlinePlusCircle size={24} />} />
			</Link>
		</div>
	)
}

export default CreaturesPage
