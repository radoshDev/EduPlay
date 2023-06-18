import { FC, InputHTMLAttributes } from "react"
import Button from "./Button"

type Props = {
	id: string
	title: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">

const InputImageField: FC<Props> = props => {
	const { id, title, ...inputProps } = props
	return (
		<label htmlFor={id} className="flex flex-col gap-2 cursor-pointer">
			{title}
			<Button className="pointer-events-none">Select file</Button>
			<input type="file" {...inputProps} id={id} hidden />
		</label>
	)
}

export default InputImageField
