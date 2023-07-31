import { Ref, TextareaHTMLAttributes, forwardRef } from "react"

type Props = {
	label: string
	error?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextAreaField = (props: Props, ref: Ref<HTMLTextAreaElement>) => {
	const { id, label, error, ...textAreaProps } = props
	return (
		<div className="form-control w-full">
			<label htmlFor={id} className="label">
				<span className="label-text">{label}</span>
			</label>
			<textarea
				ref={ref}
				{...textAreaProps}
				id={id}
				className="textarea-bordered textarea-info textarea h-24 resize-none"
			/>
			{error && <div className="mt-1 text-error">{error}</div>}
		</div>
	)
}

export default forwardRef(TextAreaField)
