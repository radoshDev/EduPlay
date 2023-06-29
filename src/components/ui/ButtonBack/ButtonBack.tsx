import { FC } from "react"
import { BsBoxArrowInLeft } from "react-icons/bs"
import Link from "next/link"
import IconButton from "../IconButton"

type Props = {
	link: string
}

const ButtonBack: FC<Props> = ({ link }) => {
	return (
		<Link href={link}>
			<IconButton icon={<BsBoxArrowInLeft size={24} />} />
		</Link>
	)
}

export default ButtonBack
