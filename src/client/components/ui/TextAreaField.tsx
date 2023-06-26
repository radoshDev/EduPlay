import { FC, TextareaHTMLAttributes } from "react"

type Props = {
	id: string
	title: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextAreaField: FC<Props> = props => {
	const { id, title, ...textAreaProps } = props
	return (
		<div className="flex flex-col w-full gap-2">
			<label htmlFor={id}>{title}</label>
			<textarea {...textAreaProps} id={id} className="py-2 px-4" />
		</div>
	)
}

export default TextAreaField
