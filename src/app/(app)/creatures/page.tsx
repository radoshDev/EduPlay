import { BsPlusCircleFill } from "react-icons/bs"
import PageLayout from "@/components/layouts/PageLayout"
import { getServerAuthSession } from "@/server/auth"
import { CategoryList, PageTitle } from "@/components/ui"
import { ButtonEducation, ButtonIcon } from "@/components/ui/buttons"
import { serverApi } from "@/server/api/api"

export const metadata = {
	title: "Creatures",
}

const CreaturesPage = async () => {
	const session = await getServerAuthSession()
	const creatureCategories = await serverApi.creature.getCategories()
	const isAdmin = session?.user.role === "admin"

	return (
		<PageLayout
			title={
				<PageTitle
					title="Creatures"
					backButton
					href="/account"
					afterAction={<ButtonEducation />}
				/>
			}>
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
