import { BsPlusCircleFill } from "react-icons/bs"
import PageLayout from "@/components/layouts/PageLayout"
import PageTitle from "@/components/ui/PageTitle/PageTitle"
import ButtonIcon from "@/components/ui/buttons/ButtonIcon"
import CategoryList from "@/components/creatures/CategoryList"
import { getServerAuthSession } from "@/server/auth"

const CreaturesPage = async () => {
	const session = await getServerAuthSession()
	const isAdmin = session?.user.role === "admin"
	return (
		<PageLayout
			title={<PageTitle title="Creatures" backButton href="/account" />}>
			<div className="flex w-full max-w-md flex-col">
				<CategoryList />
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