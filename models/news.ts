import mongoose, { type Document } from "mongoose";

export interface News {
    id: string;
    title: string;
    category: string;
    description: string;
    media: string;
}

const newsSchema = new mongoose.Schema<News>({
    title: {
        type: String,
        required: true,
        maxLength: 300
    },
    category: {
        type: String,
        enum: ["Other", "Crime", "Report"],
        default: "Other"
    },
    description: {
        type: String,
        required: true,
    },
    media: {
        type: String,
    }
}, {
    timestamps: true
})

const News = mongoose.models.News || mongoose.model<News>("News", newsSchema)
export default News;