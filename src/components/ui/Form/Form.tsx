import { FC, FormEvent, ReactNode } from "react"

type Props = {
	onSubmit: (e: FormEvent<HTMLFormElement>) => void
	children: ReactNode
}

const Form: FC<Props> = ({ onSubmit, children }) => {
	return (
		<form onSubmit={onSubmit} className="w-full max-w-md">
			{children}
		</form>
	)
}

export default Form
