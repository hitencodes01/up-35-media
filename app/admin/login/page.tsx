"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const handleLogin = async (e: any) => {
        e.preventDefault()
        const data = { email, password }
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            })
            const result = await res.json()

            if (result.success) {
                router.replace("/admin/dashboard") 
                console.log(result.message) 
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="w-dvw h-dvh flex justify-center items-center bg-white">
            <form onSubmit={handleLogin} className="bg-black border-2 border-amber-400 rounded-2xl p-5 flex flex-col gap-5 justify-center items-center ">
                <img src="/logo.png" height={100} width={100} alt="" />
                <input className="rounded-2xl border-2 border-white focus:border-0 focus:outline-2 outline-amber-400 px-5 py-2" placeholder="email" type="email" onChange={(e) => setEmail(e.target.value)} />
                <input className="rounded-2xl border-2 border-white focus:border-0 focus:outline-2 outline-amber-400 px-5 py-2" placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                <button className="bg-amber-400 px-5 py-2 cursor-pointer hover:bg-amber-500 rounded-2xl" type="submit">Login</button>
            </form>
        </div>
    )
}
