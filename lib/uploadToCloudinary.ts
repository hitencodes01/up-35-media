import cloudinary from "./cloudinary"

export async function uploadToCloudinary(file: File, folder = "news"): Promise<string> {
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            { folder, resource_type: "auto" }, // auto = image/video 
            (error, result) => {
                if (error || !result) return reject(error)
                resolve(result.secure_url)
            }
        )
        uploadStream.end(buffer)
    })
}