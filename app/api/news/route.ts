import { postNews } from "@/controllers/news"

export async function POST(request: Request) {
    const formData = await request.formData()

    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const category = formData.get("category") as string
    const mediaFile = formData.get("media") as File | null

    const data = {
        title,
        description,
        category,
        mediaFile,
    }

    return postNews(data)
}