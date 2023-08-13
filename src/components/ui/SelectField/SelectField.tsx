import { ComponentPropsWithoutRef, forwardRef, Ref } from "react"

type Props = {
	label: string
	options: { value: string | number; label: string }[]
	error?: string
} & ComponentPropsWithoutRef<"select">

const SelectField = (props: Props, ref: Ref<HTMLSelectElement>) => {
	const { label, error, options, ...selectProps } = props
	return (
		<div className="form-control w-full max-w-xs">
			<label className="label">
				<span className="label-text">{label}</span>
			</label>
			<select className="select-bordered select" ref={ref} {...selectProps}>
				{options.map(({ label, value }) => (
					<option key={value} value={value}>
						{label}
					</option>
				))}
			</select>
			{error && <div className="mt-1 text-error">{error}</div>}
		</div>
	)
}

export default forwardRef(SelectField)
