import {NextResponse} from "next/"

export async function loginController(data: { email: string, password: string }) {
    const {email , password} = data

    if(!email || !password){
        return NextRespo
    }
}