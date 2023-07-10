"use client"

import ButtonIcon from "@/components/ui/buttons/ButtonIcon"
import { AiFillFileAdd } from "react-icons/ai"
import { FC, MouseEvent, useRef } from "react"
import Button from "@/components/ui/Button"
import { api } from "@/utils/api"
import toBase64 from "@/helpers/toBase64"

const AddManyCreatures: FC = () => {
	const { data, error, isSuccess, isError, mutate, isLoading } =
		api.creature.addManyCreatures.useMutation()
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
		const base64File = await toBase64(file)
		mutate({ base64File })
	}
	return (
		<>
			<ButtonIcon
				color="success"
				icon={<AiFillFileAdd size={28} onClick={handleShowModal} />}
			/>
			<dialog id="my_modal_2" className="modal backdrop:backdrop-blur-sm">
				<form method="dialog" className="modal-box text-center">
					<h3 className="text-lg font-bold">Multiple adding creature</h3>
					<p className="py-4">
						Add .csv file with comma separated fields.{" "}
						<a
							className="text-primary"
							href="https://docs.google.com/spreadsheets/d/1jZq32Y6dvlsSF0bBv0gw0WBmzsrG8Umge41aKWS49ag/edit#gid=1194213657"
							target="_blank">
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
					{isSuccess && (
						<div className="mt-3 text-success">
							{data?.message || "Import successfully!"}
						</div>
					)}
					{isError && (
						<div className="mt-3 text-error">{error.message || "Error!!!"}</div>
					)}
				</form>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	)
}

export default AddManyCreatures
