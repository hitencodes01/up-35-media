"use client"

import Footer from "@/components/Footer"
import Loading from "@/components/Loading"
import Navbar from "@/components/Navbar"
import NewsGrid from "@/components/NewsGrid"
import { useEffect, useState } from "react"

export default function Page() {
  const [news, setNews] = useState<{ _id: string, title: string, description: string, category: "Other" | "Crime" | "Report", media?: File, createdAt: string }[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await fetch("/api/getNews")
      if (res.status === 200) {
        const data = await res.json()
        setNews(data.news)
      }
    } finally {
      setLoading(false)
    }
  }
  if(loading){
    return <Loading what="News"/>
  }

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8 sm:mb-10 border-b border-amber-400/20 pb-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Latest <span className="text-amber-400">News</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-neutral-400">
            Stay updated with the latest stories and reports
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800"
              >
                <div className="h-40 sm:h-48 bg-neutral-800" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-neutral-800 rounded w-3/4" />
                  <div className="h-3 bg-neutral-800 rounded w-full" />
                  <div className="h-3 bg-neutral-800 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        ) : news.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-amber-400/10 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-neutral-400">No news articles found yet.</p>
          </div>
        ) : (
          <NewsGrid news={news} />
        )}
      </main>

      <Footer />
    </div>
  )
}