import getFileFromBase64 from "@/helpers/getFileFromBase64"
import getSupabaseImageUrl from "@/helpers/getSupabaseImageUrl"
import { supabase } from "@/server/subabase"
import { StorageBucket } from "@/types"
import { TRPCError } from "@trpc/server"

type Props = {
	base64: string
	folder: string
	bucket: StorageBucket
	fileName: string
}

const uploadImageToStorage = async ({
	base64,
	bucket,
	folder,
	fileName,
}: Props) => {
	const file = await getFileFromBase64(base64)

	const { data, error } = await supabase.storage
		.from(bucket)
		.upload(`${folder}/${fileName}`, file)
	if (error || !data) {
		console.log(error)

		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: "Problem to upload file to storage",
		})
	}
	return getSupabaseImageUrl(data.path, bucket)
}

export default uploadImageToStorage
