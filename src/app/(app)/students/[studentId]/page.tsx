import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"
import { PageProps } from "@/types"

type Props = PageProps<"studentId">

const StudentPage = ({ params }: Props) => {
	return (
		<PageLayout
			title={
				<PageTitle
					title="Student Info"
					backButton
					href={`/education/${params.studentId}`}
				/>
			}>
			<div>
				<div>User info</div>
				<div>Statistic</div>
			</div>
		</PageLayout>
	)
}

export default StudentPage
