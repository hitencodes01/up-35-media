"use client"
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Share2Icon, ShareIcon } from "lucide-react";
import { use, useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function NewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [loading ,setLoading] = useState(true)
  const [news, setNews] = useState<{ _id: string, title: string, description: string, createdAt: string, category: "Report" | "Crime" | "Other", media: string } | null>(null)
  async function getNews(id: string) {
    try {
      const res = await fetch(`/api/news/get/${id}`)
      const data = await res.json()
      setNews(data.news)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getNews(id)
  }, [id])

  async function handleShare() {
    if (!news) return
    const shareUrl = `${window.location.origin}/news/${news._id}`

    if (navigator.share) {
      try {
        await navigator.share({
          title: news.title,
          text: news.title,
          url: shareUrl,
        })
      } catch (error) {
        console.log("Share cancelled or failed", error)
      }
    } else {
      // fallback for desktop browsers without Web Share API
      await navigator.clipboard.writeText(shareUrl)
      alert("Link copied to clipboard!")
    }
  }

  if(loading){
    return <Loading what="news"/>
  }

  if (!news) {
    return <div className="p-10 text-center">News not found.</div>;
  }

  const date = new Date(news.createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(/hero.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
        className="py-5"
      >
        <article className="bg-white max-w-3xl mx-auto px-5 py-5 rounded-2xl sm:max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-orange-600">
            {news.category}
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 leading-tight text-neutral-900">
            {news.title}
          </h1>

          <div className="flex newss-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex newss-center justify-center text-xs font-bold text-orange-600">
              AM
            </div>
            <p className="text-sm text-neutral-500">
              Report by{" "}
              <Link href="/about" className="font-semibold text-neutral-700 hover:text-orange-600">
                Anuj Kumar Mishra
              </Link>{" "}
              · {date}
            </p>
            <button
              onClick={handleShare}
              className="ml-auto bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-xs rounded-2xl cursor-pointer flex items-center gap-1"
            >
              <Share2Icon size={14} />
              Share
            </button>
            {/* <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-xs rounded-2xl cursor-pointer"><Share2Icon color="black"/></button> */}
          </div>

          <img
            src={news.media}
            alt={news.title}
            className="w-[400px] rounded-xl mb-6 object-cover"
          />

          <p className="text-neutral-700 leading-relaxed whitespace-pre-line text-base">
            {news.description}
          </p>
        </article>
      </div>
      <Footer />
    </div >
  );
}