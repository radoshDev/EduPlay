import { forwardRef, Ref } from "react"
import cn from "clsx"
import { Form, FormControlProps } from "react-bootstrap"

type Props = {
	label: string
	error?: string
} & FormControlProps

const InputField = (props: Props, ref: Ref<HTMLInputElement>) => {
	const { label, error, ...inputProps } = props
	return (
		<Form.Group className="mb-3">
			<Form.Label>{label}</Form.Label>
			<Form.Control
				ref={ref}
				{...inputProps}
				className={cn({ invalid: !!error })}
			/>
			{error && <Form.Text className="text-danger">{error}</Form.Text>}
		</Form.Group>
	)
}

export default forwardRef(InputField)
