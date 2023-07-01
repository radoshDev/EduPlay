import { InputHTMLAttributes, Ref, forwardRef } from "react"

type Props = {
	title: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">

const InputImageField = (props: Props, ref: Ref<HTMLInputElement>) => {
	const { id, title, ...inputProps } = props
	return (
		<div className="form-control w-full">
			<label htmlFor={id} className="label">
				<span className="label-text">{title}</span>
			</label>

			<input
				ref={ref}
				id={id}
				type="file"
				className="file-input-bordered file-input-info file-input w-full"
				{...inputProps}
			/>
		</div>
	)
}

export default forwardRef(InputImageField)
