import { CategoryCard } from "@/components/ui"
import { Category } from "@/types"
import { ReactNode } from "react"

type Props = {
	list: Category[]
	hrefStart: string
	studentId?: string
}

const CategoryList = ({ list, hrefStart, studentId }: Props) => {
	const studentQuery = studentId ? `?studentId=${studentId}` : ""
	let content: ReactNode
	if (list.length === 0) {
		content = <div>No items yet...</div>
	} else {
		content = list.map(category => (
			<CategoryCard
				href={`/${hrefStart}/${category.slug}${studentQuery}`}
				title={category.title}
				imageSrc={category.imageUrl}
				key={category.id}
			/>
		))
	}
	return (
		<div className="flex w-full flex-1 flex-col gap-4 overflow-auto p-3">
			{content}
		</div>
	)
}

export default CategoryList
