import { createTRPCRouter } from "../trpc"
import addCategoryHandler from "../handlers/creature/addCategoryHandler"
import getCreatureHandler from "../handlers/creature/getCreatureHandler"
import addCreatureHandler from "../handlers/creature/addCreatureHandler"

export const creatureRouter = createTRPCRouter({
	getCreature: getCreatureHandler,
	addCreature: addCreatureHandler,
	addCategory: addCategoryHandler,
})
