import { NextResponse } from "next/server"
import mongoose from "mongoose"
import News, { type News as NewsType } from "@/models/news"
import { uploadToCloudinary } from "@/lib/uploadToCloudinary"
import { connectDB } from "@/config/db"

type PostNewsInput = Omit<NewsType, "id" | "media"> & { mediaFile?: File | null }

export async function postNews(data: PostNewsInput) {
    try {
        await connectDB()
        const { title, description, category, mediaFile } = data

        if (!title || !description) {
            return NextResponse.json(
                { success: false, message: "Title and Description are required" },
                { status: 400 }
            )
        }

        let mediaUrl: string | undefined

        if (mediaFile && mediaFile.size > 0) {
            mediaUrl = await uploadToCloudinary(mediaFile, "news")
        }

        const news = await News.create({
            title,
            description,
            category,
            media: mediaUrl,
        })

        return NextResponse.json(
            { success: true, message: "News created successfully", data: news },
            { status: 201 }
        )
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            return NextResponse.json({ success: false, message: error.message }, { status: 400 })
        }
        console.error("postNews error:", error)
        return NextResponse.json({ success: false, message: "Something went wrong" }, { status: 500 })
    }
}