import Link from "next/link";

interface NewsItem {
    _id: string;
    title: string;
    description: string;
    category: "Crime" | "Report" | "Other";
    media?: File;
    createdAt: string;
}

function truncate(text: string, limit: number) {
    if (!text) return "";
    return text.length > limit ? text.slice(0, limit).trim() + "…" : text;
}

function NewsCard({ item }: { item: NewsItem }) {
    const date = new Date(item.createdAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    return (
        <article className="flex flex-col shadow-lg shadow-amber-400 bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-shadow duration-300">
            {/* Image */}
            {item.media && (<div className="relative w-full aspect-[16/10] overflow-hidden">
                <img
                    src={item.media}
                    alt={item.title}
                    className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-white bg-black/50 px-2 py-1 rounded">
                    {item.category}
                </span>
            </div>)}
            {!item.media && (<div className="relative w-full bg-amber-200 aspect-[16/10] overflow-hidden">
                <span className="absolute bottom-3 left-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-white bg-black/50 px-2 py-1 rounded">
                    {item.category}
                </span>
            </div>)}
            {/* Content */}
            <div className="flex flex-col gap-3 p-5 flex-1">
                <span className="text-xs font-mono text-neutral-400">{date}</span>

                <h2 className="text-lg font-bold leading-tight text-amber-400 line-clamp-2">
                    {item.title}
                </h2>

                <p className="text-sm text-neutral-500 leading-relaxed">
                    {truncate(item.description, 110)}
                </p>

                <Link
                    href={`/news/${item._id}`}
                    className="text-sm font-semibold text-orange-600 hover:underline w-fit"
                >
                    Read More →
                </Link>

                <div className="mt-auto pt-4 border-t border-neutral-200 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-600">
                        AM
                    </div>
                    <p className="text-xs text-neutral-500">
                        Report by{" "}
                        <Link
                            href="/about"
                            className="font-semibold text-neutral-700 hover:text-orange-600"
                        >
                            Anuj Kumar Mishra
                        </Link>
                    </p>
                </div>
            </div>
        </article >
    );
}

export default function NewsGrid({ news }: { news: NewsItem[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
            {news?.map((item) => (
                <NewsCard key={item._id} item={item} />
            ))}
        </div>
    );
}