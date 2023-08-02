"use client"

import { useEffect } from "react"
import { IoReloadSharp, IoArrowForwardSharp } from "react-icons/io5"
import { Button } from "@/components/ui/buttons"
import { selectCurrentTaskRound } from "@/redux/features/task/selector"
import { resetTask } from "@/redux/features/task/taskSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

const ResetModal = () => {
	const dispatch = useAppDispatch()
	const taskRound = useAppSelector(selectCurrentTaskRound)
	useEffect(() => {
		if (taskRound?.inProgress) {
			// @ts-ignore
			window.reset_task_modal.showModal()
		}
	}, [taskRound?.inProgress])

	function handleClose() {
		// @ts-ignore
		window.reset_task_modal.close()
	}

	function handleResetTask() {
		dispatch(resetTask())
		handleClose()
	}
	return (
		<dialog id="reset_task_modal" className="modal">
			<form method="dialog" className="modal-box">
				<h3 className="text-center text-lg font-bold">Продовжити?</h3>
				<div className="flex justify-center gap-4 py-4">
					<Button variant="success" onClick={handleResetTask}>
						<IoReloadSharp size={24} />
					</Button>
					<Button variant="warning" onClick={handleClose}>
						<IoArrowForwardSharp size={24} />
					</Button>
				</div>
			</form>
			<form method="dialog" className="modal-backdrop">
				<button onClick={handleClose}>close</button>
			</form>
		</dialog>
	)
}

export default ResetModal
