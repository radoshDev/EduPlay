import { createTRPCRouter } from "../trpc"
import addCategoryHandler from "../handlers/creature/addCategoryHandler"
import getCreatureHandler from "../handlers/creature/getCreatureHandler"
import addCreatureHandler from "../handlers/creature/addCreatureHandler"
import addManyCreaturesHandler from "../handlers/creature/addManyCreaturesHandler"

export const creatureRouter = createTRPCRouter({
	getCreature: getCreatureHandler,
	addCreature: addCreatureHandler,
	addManyCreatures: addManyCreaturesHandler,
	addCategory: addCategoryHandler,
})
