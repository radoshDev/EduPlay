import { StorageBucket } from "@/types"

const getSupabaseImageUrl = (path: string, bucket: StorageBucket): string => {
	return `https://qyfqvfdpjfhwsboiuybh.supabase.co/storage/v1/object/public/${bucket}/${path}`
}

export default getSupabaseImageUrl
