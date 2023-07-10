import Link from "next/link"
import CategoryCard from "../CategoryCard"
import { Category } from "@/types"
import { ReactNode } from "react"

type Props = {
	list: Category[]
	hrefStart: string
}

const CategoryList = ({ list, hrefStart }: Props) => {
	let content: ReactNode
	if (list.length === 0) {
		content = <div>No Task Category yet...</div>
	} else {
		content = list.map(category => (
			<Link href={`/${hrefStart}/${category.slug}`} key={category.id}>
				<CategoryCard title={category.title} imageSrc={category.imageUrl} />
			</Link>
		))
	}
	return (
		<div className="flex w-full flex-1 flex-col gap-4 overflow-auto p-3">
			{content}
		</div>
	)
}

export default CategoryList
