import { createTRPCRouter } from "../trpc"
import addCategoryHandler from "../handlers/creature/addCategoryHandler"
import getOneCreatureHandler from "../handlers/creature/getOneCreatureHandler"
import addCreatureHandler from "../handlers/creature/addCreatureHandler"
import updateCreatureHandler from "../handlers/creature/updateCreatureHandler"
import getCreatureCategoriesHandler from "../handlers/creature/getCreatureCategoriesHandler"
import getOneCategoryHandler from "../handlers/creature/getOneCategoryHandler"
import getCreaturesHandler from "../handlers/creature/getCreaturesHandler"

export const creatureRouter = createTRPCRouter({
	getOneCreature: getOneCreatureHandler,
	getCreatures: getCreaturesHandler,
	addCreature: addCreatureHandler,
	updateCreature: updateCreatureHandler,
	getCategories: getCreatureCategoriesHandler,
	getOneCategory: getOneCategoryHandler,
	addCategory: addCategoryHandler,
})
