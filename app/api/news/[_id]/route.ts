import { connectDB } from "@/config/db";
import News from "@/models/news";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await connectDB()
        const { id } = params
        console.log(id)
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json(
                { success: false, message: "Invalid news ID" },
                { status: 400 }
            )
        }

        const news = await News.findById({ _id: id })
        console.log(news)
        if (!news) {
            return NextResponse.json(
                { success: false, message: "News not found" },
                { status: 404 }
            )
        }

        return NextResponse.json({ success: true, news }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Something went wrong" }, { status: 500 })
    }
}