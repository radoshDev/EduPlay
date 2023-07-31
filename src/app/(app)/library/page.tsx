import PageLayout from "@/components/layouts/PageLayout"
import { CategoryList, PageTitle } from "@/components/ui"
import { ButtonAdd } from "@/components/ui/buttons"
import { getServerAuthSession } from "@/server/auth"
import { prisma } from "@/server/db"
import { PageProps } from "@/types"

const LibraryPage = async ({
	searchParams,
}: PageProps<string, "studentId">) => {
	const studentId = searchParams?.studentId
	const backHref = studentId ? `/education/${studentId}` : "/students"
	const session = await getServerAuthSession()
	const taskCategories = await prisma.taskCategory.findMany()
	const isAdmin = session?.user.role === "admin"

	return (
		<PageLayout
			title={<PageTitle title="Library" backButton href={backHref} />}>
			<div className="flex w-full max-w-md flex-col items-center">
				<CategoryList
					list={taskCategories}
					hrefStart="library"
					studentId={studentId}
				/>
				{isAdmin && <ButtonAdd href="/library/new" />}
			</div>
		</PageLayout>
	)
}

export default LibraryPage
