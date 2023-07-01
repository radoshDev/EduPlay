import ButtonIcon from "@/components/ui/buttons/ButtonIcon"
import { BsPlusCircleFill } from "react-icons/bs"
import { FC } from "react"

type Props = {
	categorySlug: string
}

const AddCreatureButton: FC<Props> = ({ categorySlug }) => {
	return (
		<div className="mt-4 text-center">
			<ButtonIcon
				round
				icon={<BsPlusCircleFill size={30} />}
				color="success"
				href={`/creatures/${categorySlug}/new`}
			/>
		</div>
	)
}

export default AddCreatureButton
