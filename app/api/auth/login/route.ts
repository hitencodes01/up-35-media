import { loginController } from "@/controllers/auth"

export async function POST(request: Request) {
    const body = await request.json()
    return loginController(body)
}