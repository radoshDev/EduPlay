import { Ref, TextareaHTMLAttributes, forwardRef } from "react"

type Props = {
	id: string
	title: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextAreaField = (props: Props, ref: Ref<HTMLTextAreaElement>) => {
	const { id, title, ...textAreaProps } = props
	return (
		<div className="form-control w-full">
			<label htmlFor={id} className="label">
				<span className="label-text">{title}</span>
			</label>
			<textarea
				ref={ref}
				{...textAreaProps}
				id={id}
				className="textarea-bordered textarea-info textarea h-24 resize-none"
			/>
		</div>
	)
}

export default forwardRef(TextAreaField)
