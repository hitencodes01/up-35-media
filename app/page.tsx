"use client"
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import NewsGrid from "@/components/NewsGrid";
import { useEffect, useState } from "react";

export default function Home() {

  const [news, setNews] = useState<{ _id: string, title: string, description: string, category: "Other" | "Crime" | "Report", media?: File, createdAt: string }[]>([])
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const res = await fetch("/api/getNews")
    if (res.status === 200) {
      const data = await res.json()
      console.log(data.news)
      setNews(data.news)

    }
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="text-md md:text-3xl text-center font-bold p-2 bg-amber-400 mt-6">
        Latest News from Unnao by Anuj Mishra
      </div>
      <NewsGrid news={news} />
      <Footer />
    </>
  )
}
