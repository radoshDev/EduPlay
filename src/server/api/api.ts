import { appRouter } from "./routers/root"
import type { Context } from "./context"

export const serverApi = appRouter.createCaller({ session: null })

export const getServerApi = (session: Context["session"]) => {
	return appRouter.createCaller({ session })
}
