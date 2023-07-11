import { InputHTMLAttributes, Ref, forwardRef } from "react"

type Props = {
	label: string
	error?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">

const InputImageField = (props: Props, ref: Ref<HTMLInputElement>) => {
	const { id, label, error, ...inputProps } = props
	return (
		<div className="form-control w-full">
			<label htmlFor={id} className="label">
				<span className="label-text">{label}</span>
			</label>

			<input
				ref={ref}
				id={id}
				type="file"
				className="file-input-bordered file-input-info file-input w-full"
				{...inputProps}
			/>
			{error && <div className="mt-1 text-error">{error}</div>}
		</div>
	)
}

export default forwardRef(InputImageField)
