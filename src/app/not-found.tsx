import PageLayout from "@/components/layouts/PageLayout"
import { PageTitle } from "@/components/ui"

const NotFoundPage = () => {
	return (
		<PageLayout title={<PageTitle title="404" backButton href="." />}>
			<h1>This page does not exist!</h1>
		</PageLayout>
	)
}

export default NotFoundPage
