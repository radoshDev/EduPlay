import { BsPlusCircleFill } from "react-icons/bs"
import PageLayout from "@/components/layouts/PageLayout"
import PageTitle from "@/components/ui/PageTitle/PageTitle"
import ButtonIcon from "@/components/ui/buttons/ButtonIcon"
import CategoryList from "@/components/creatures/CategoryList"

const CreaturesPage = async () => {
	return (
		<PageLayout
			title={<PageTitle title="Creatures" backButton href="/account" />}>
			<CategoryList />
			<div className="mt-6 text-center">
				<ButtonIcon
					round
					icon={<BsPlusCircleFill size={30} />}
					color="success"
					href="/creatures/new"
				/>
			</div>
		</PageLayout>
	)
}

export default CreaturesPage
