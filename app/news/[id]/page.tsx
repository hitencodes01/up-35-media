import Link from "next/link";
import { connectDB } from "@/config/db";
import News from "@/models/news";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Share2Icon, ShareIcon } from "lucide-react";

async function getNews(id: string) {
  await connectDB();
  const item = await News.findById(id).lean();
  return JSON.parse(JSON.stringify(item));
}

export default async function NewsDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getNews(id);

  if (!item) {
    return <div className="p-10 text-center">News not found.</div>;
  }

  const date = new Date(item.createdAt).toLocaleDateString("en-IN", {
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
            {item.category}
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 leading-tight text-neutral-900">
            {item.title}
          </h1>

          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-xs font-bold text-orange-600">
              AM
            </div>
            <p className="text-sm text-neutral-500">
              Report by{" "}
              <Link href="/about" className="font-semibold text-neutral-700 hover:text-orange-600">
                Anuj Kumar Mishra
              </Link>{" "}
              · {date}
            </p>
            {/* <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-xs rounded-2xl cursor-pointer"><Share2Icon color="black"/></button> */}
          </div>

          <img
            src={item.media}
            alt={item.title}
            className="w-[400px] rounded-xl mb-6 object-cover"
          />

          <p className="text-neutral-700 leading-relaxed whitespace-pre-line text-base">
            {item.description}
          </p>
        </article>
      </div>
      <Footer />
    </div >
  );
}