import { CategoryCard } from "@/components/ui"
import { EARN_TYPES } from "@/constants"
import { FC } from "react"
import { IoLibrarySharp } from "react-icons/io5"

type Props = { studentId: string }

const TaskList: FC<Props> = ({ studentId }) => {
	return (
		<div className="flex w-full max-w-sm flex-col gap-4">
			<CategoryCard
				title="Бібліотека"
				Icon={IoLibrarySharp}
				href={`/library?studentId=${studentId}`}
			/>
			{EARN_TYPES.map(item => (
				<CategoryCard
					href={`${studentId}/${item.type}`}
					key={item.type}
					title={item.title}
					imageSrc={item.imageSrc}
				/>
			))}
		</div>
	)
}

export default TaskList
