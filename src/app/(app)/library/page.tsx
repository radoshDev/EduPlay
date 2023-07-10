import PageLayout from "@/components/layouts/PageLayout"
import CategoryList from "@/components/ui/CategoryList"
import PageTitle from "@/components/ui/PageTitle/PageTitle"
import ButtonAdd from "@/components/ui/buttons/ButtonAdd"
import { getServerAuthSession } from "@/server/auth"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"

const LibraryPage = async ({
	searchParams,
}: PageProps<string, "studentId">) => {
	const backHref = searchParams?.studentId
		? `/education/${searchParams.studentId}`
		: "/students"
	const session = await getServerAuthSession()
	const taskCategories = await prisma.taskCategory.findMany()
	const isAdmin = session?.user.role === "admin"

	return (
		<PageLayout
			title={<PageTitle title="Library" backButton href={backHref} />}>
			<div className="flex w-full max-w-md flex-col items-center">
				<CategoryList list={taskCategories} hrefStart="library" />
				{isAdmin && <ButtonAdd href="/library/new" />}
			</div>
		</PageLayout>
	)
}

export default LibraryPage
