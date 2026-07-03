import { NextResponse } from "next/server"

export async function loginController(data: { email: string, password: string }) {
    const { email, password } = data

    if (!email || !password) {
        return NextResponse.json({
            success: false,
            message: "Email and Password are required"
        },
            { status: 400 })
    }

    if (email !== process.env.email || password !== process.env.password) {
        return NextResponse.json(
            {
                success: false,
                message: "Invalid Credentials",
            },
            { status: 401 }
        );
    }

    const response = NextResponse.json({
        success: true,
        message: "Login Successfull"
    },
        { status: 200 })
    response.cookies.set("isLoggedIn", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
    })
    return response
}