import clsx from "clsx"
import { forwardRef, InputHTMLAttributes, Ref } from "react"

type Props = {
	title: string
	error?: string
} & InputHTMLAttributes<HTMLInputElement>

const InputField = (props: Props, ref: Ref<HTMLInputElement>) => {
	const { id, title, error } = props
	const inputCn = clsx("input_field", { error: !!error })
	return (
		<div className="flex flex-col w-full">
			<label htmlFor={id} className="mb-1">
				{title}
			</label>
			<input {...props} id={id} className={inputCn} ref={ref} />
			{error && <div className="text-red-600 text-sm mt-1">{error}</div>}
		</div>
	)
}

export default forwardRef(InputField)
