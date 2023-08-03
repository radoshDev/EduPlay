import { createTRPCRouter } from "../trpc"
import addCategoryHandler from "../handlers/creature/addCategoryHandler"
import getCreatureHandler from "../handlers/creature/getCreatureHandler"
import addCreatureHandler from "../handlers/creature/addCreatureHandler"
import updateCreatureHandler from "../handlers/creature/updateCreatureHandler"

export const creatureRouter = createTRPCRouter({
	getCreature: getCreatureHandler,
	addCreature: addCreatureHandler,
	updateCreature: updateCreatureHandler,
	addCategory: addCategoryHandler,
})
