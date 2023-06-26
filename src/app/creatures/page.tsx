import Link from "next/link"
import { PlusCircleFill } from "react-bootstrap-icons"
import { appRouter } from "@/server/routers/_app"
import IconButton from "@/client/components/ui/IconButton"

const CreaturesPage = async () => {
	// const creatureCategories = await prisma.creaturesCategories.findMany()
	const caller = appRouter.createCaller({ session: null })
	const res = await caller.creature.getCreature({ id: "TEST" })
	console.log("TRPC", res)

	return (
		<div className="container">
			<h1>Істоти</h1>
			{/* <div className="grid gap-4">
				{creatureCategories.map(category => (
					<Link href={`/${category.slug}`} key={category.id}>
						{category.title}
					</Link>
				))}
			</div> */}
			<Link href="/creatures/new">
				<IconButton icon={<PlusCircleFill size={24} />} />
			</Link>
		</div>
	)
}

export default CreaturesPage
