import { BsPlusCircleFill } from "react-icons/bs"
import PageLayout from "@/components/layouts/PageLayout"
import { getServerAuthSession } from "@/server/auth"
import { prisma } from "@/server/db"
import { ButtonIcon, CategoryList, PageTitle } from "@/components/ui"

export const metadata = {
	title: "Creature | EduPlay",
	description:
		"EduPlay: Learn & Earn Coins makes education exciting with fun-filled lessons on alphabets, words, and math. Kids enjoy the engaging, interactive tasks and earn coins for their achievements, turning learning into an adventurous game!",
}

const CreaturesPage = async () => {
	const session = await getServerAuthSession()
	const creatureCategories = await prisma.creatureCategory.findMany()
	const isAdmin = session?.user.role === "admin"
	return (
		<PageLayout
			title={<PageTitle title="Creatures" backButton href="/account" />}>
			<div className="flex w-full max-w-md flex-col">
				<CategoryList list={creatureCategories} hrefStart="creatures" />
				{isAdmin && (
					<div className="mt-6 text-center">
						<ButtonIcon
							round
							icon={<BsPlusCircleFill size={30} />}
							color="success"
							href="/creatures/new"
						/>
					</div>
				)}
			</div>
		</PageLayout>
	)
}

export default CreaturesPage
