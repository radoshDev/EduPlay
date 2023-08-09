"use client"
import { AiFillFileAdd } from "react-icons/ai"
import toast, { Toaster } from "react-hot-toast"
import { FC, MouseEvent, useRef } from "react"
import { ButtonIcon, Button } from "@/components/ui/buttons"
import toBase64 from "@/helpers/toBase64"
import { api } from "@/utils/api"

type Props = {
	action: Exclude<keyof typeof api.import, "getQueryKey">
	templateLink: string
}

const ImportForm: FC<Props> = props => {
	const { templateLink, action } = props
	const { mutateAsync, isLoading } = api.import[action].useMutation()
	const fileRef = useRef<HTMLInputElement | null>(null)

	function handleShowModal() {
		// @ts-ignore
		window.my_modal_2.showModal()
	}

	async function handleImportFile(e: MouseEvent) {
		e.preventDefault()
		const file = fileRef.current?.files?.[0]
		if (!file) {
			console.error("CSV file not added!")
			return
		}
		const promise = toBase64(file).then(base64File =>
			mutateAsync({ base64File })
		)

		toast.promise(promise, {
			loading: "Importing...",
			error: err => err.message || "Import failed.",
			success: data => data?.message || "Import successfully!",
		})
	}

	return (
		<>
			<ButtonIcon
				color="success"
				icon={<AiFillFileAdd size={28} onClick={handleShowModal} />}
			/>
			<Toaster />
			<dialog id="my_modal_2" className="modal backdrop:backdrop-blur-sm">
				<form method="dialog" className="modal-box text-center">
					<h3 className="text-lg font-bold">Multiple adding</h3>
					<p className="py-4">
						Add .csv file with comma separated fields.{" "}
						<a className="text-primary" href={templateLink} target="_blank">
							Template
						</a>
					</p>
					<input
						ref={fileRef}
						type="file"
						accept=".csv"
						className="file-input-bordered file-input-success file-input w-full"
					/>
					<Button
						isLoading={isLoading}
						variant="primary"
						className="mt-6"
						onClick={handleImportFile}>
						IMPORT
					</Button>
				</form>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	)
}

export default ImportForm
