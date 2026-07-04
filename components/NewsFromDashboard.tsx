import Link from "next/link";
import { useEffect, useState } from "react";

interface NewsItem {
    _id: string;
    title: string;
    description: string;
    category: "Crime" | "Report" | "Other";
    media?: string;
    createdAt: string;
}

interface NewsFromDashboardProps {
    refreshKey: number;
    onDeleted: () => void;
}

function truncate(text: string, limit: number) {
    if (!text) return "";
    return text.length > limit ? text.slice(0, limit).trim() + "…" : text;
}

function NewsCard({ item, onDelete }: { item: NewsItem, onDelete: (_id: string) => void }) {
    const date = new Date(item.createdAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    return (
        <article className="flex flex-col shadow-lg shadow-amber-400 bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-shadow duration-300">
            {item.media ? (
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <img src={item.media} alt={item.title} className="w-full h-full object-cover" />
                    <span className="absolute bottom-3 left-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-white bg-black/50 px-2 py-1 rounded">
                        {item.category}
                    </span>
                </div>
            ) : (
                <div className="relative w-full bg-amber-200 aspect-[16/10] overflow-hidden">
                    <span className="absolute bottom-3 left-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-white bg-black/50 px-2 py-1 rounded">
                        {item.category}
                    </span>
                </div>
            )}
            <div className="flex flex-col gap-3 p-5 flex-1">
                <span className="text-xs font-mono text-neutral-400">{date}</span>
                <h2 className="text-lg font-bold leading-tight text-amber-400 line-clamp-2">{item.title}</h2>
                <p className="text-sm text-neutral-500 leading-relaxed">{truncate(item.description, 110)}</p>
                <Link href={`/news/${item._id}`} className="text-sm font-semibold text-orange-600 hover:underline w-fit">
                    Read More →
                </Link>
                <div className="mt-auto pt-4 border-t border-neutral-200 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-600">
                        AM
                    </div>
                    <p className="text-xs text-neutral-500">
                        Report by{" "}
                        <Link href="/about" className="font-semibold text-neutral-700 hover:text-orange-600">
                            Anuj Kumar Mishra
                        </Link>
                    </p>
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-xs rounded-2xl cursor-pointer"
                        onClick={() => onDelete(item._id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </article>
    );
}

export default function NewsFromDashboard({ refreshKey, onDeleted }: NewsFromDashboardProps) {
    const [news, setNews] = useState<NewsItem[]>([])

    const fetchData = async () => {
        try {
            const res = await fetch("/api/getNews")
            if (res.status === 200) {
                const data = await res.json()
                setNews(data.news)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // 👇 create ya delete hone par refreshKey change hoga -> ye effect fir chalega
    useEffect(() => {
        fetchData()
    }, [refreshKey])

    const deleteNews = async (_id: string) => {
        try {
            const res = await fetch(`/api/news/delete/${_id}`, { method: "DELETE" });
            const data = await res.json()
            window.alert(data.message)
            if (res.status === 200) {
                onDeleted() // 👈 parent ke refreshKey ko increment karega
            }
        } catch (error) {
            window.alert("Cannot delete post, Try Again!")
        }
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
            {news?.map((item) => (
                <NewsCard key={item._id} item={item} onDelete={deleteNews} />
            ))}
        </div>
    );
}