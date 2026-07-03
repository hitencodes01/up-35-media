import { connectDB } from "@/config/db";
import News from "@/models/news";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        await connectDB()
        const allNews = await News.find().sort({ createdAt: -1 })
        return NextResponse.json({ success: true, news: allNews }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: error }, { status: 500 })
    }
}