"use client"

import ButtonIcon from "@/components/ui/buttons/ButtonIcon"
import { AiFillFileAdd } from "react-icons/ai"
import { FC } from "react"
import Button from "@/components/ui/Button"

const AddManyCreatures: FC = () => {
	function handleShowModal() {
		// @ts-ignore
		window.my_modal_2.showModal()
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
					<p className="py-4">Add .csv file with comma separated fields</p>
					<input
						type="file"
						className="file-input-bordered file-input-success file-input w-full"
					/>
					<Button variant="primary" className="mt-5">
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

export default AddManyCreatures
