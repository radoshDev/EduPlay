import { ComponentPropsWithoutRef, forwardRef, Ref } from "react"
import cn from "clsx"

type Props = {
	label: string
	error?: string
} & ComponentPropsWithoutRef<"input">

const InputField = (props: Props, ref: Ref<HTMLInputElement>) => {
	const { label, error, ...inputProps } = props
	return (
		<div className="form-control mb-2">
			<label className="label">{label}</label>
			<input
				ref={ref}
				{...inputProps}
				className={cn(
					"input-bordered input-info input w-full max-w-xs rounded-full",
					{
						["input-error"]: !!error,
					}
				)}
			/>
			{error && <div className="text-error">{error}</div>}
		</div>
	)
}

export default forwardRef(InputField)
