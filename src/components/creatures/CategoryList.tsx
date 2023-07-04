import Link from "next/link"
import { prisma } from "@/server/db"
import CategoryCard from "../ui/CategoryCard/CategoryCard"

const CategoryList = async () => {
	const creatureCategories = await prisma.creatureCategory.findMany()

	return (
		<div className="grid gap-4">
			{creatureCategories.map(category => (
				<Link href={`/creatures/${category.slug}`} key={category.id}>
					<CategoryCard title={category.title} imageSrc={category.imageUrl} />
				</Link>
			))}
		</div>
	)
}

export default CategoryList
