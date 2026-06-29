import mongoose, { type Document } from "mongoose";

interface News {
    id: string;
    title: string;
    tags: string[];
    description: string;
    media: string;
}

const newsSchema = new mongoose.Schema<News>({
    title: {
        type: String,
        required: true,
        maxLength: 300
    },
    tags: {
        type: [],
        default: ["news"]
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

const News = mongoose.model<News>("News", newsSchema)
export default News;