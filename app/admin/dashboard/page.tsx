"use client"
import NewsGrid from '@/components/NewsGrid';
import React, { useEffect, useState } from 'react'

export default function Dashboard() {
  const [newNews, setNewNews] = useState<boolean>(false)
  const currentDate = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const [news, setNews] = useState<{ _id: string, title: string, description: string, category: "Other" | "Crime" | "Report", media?: File , createdAt : string}[]>([])
  useEffect(() => {
    fetchData()
  }, [newNews])
  const fetchData = async () => {
    const res = await fetch("/api/getNews")
    if (res.status === 200) {
      const data = await res.json()
      console.log(data.news)
      setNews(data.news)
    }
  }
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [category, setCategory] = useState<"Crime" | "Report" | "Other">("Other")
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files?.length) return;

    const selectedFile = e.target.files[0];

    // 5 MB Validation
    if (selectedFile.size > 5 * 1024 * 1024) {
      alert("File should be less than 5 MB");
      return;
    }

    setFile(selectedFile);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);

    if (file) {
      formData.append("media", file);
    }

    try {
      const res = await fetch("/api/news", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      console.log(result);

      if (res.status === 201) {
        alert("News Uploaded");

        setTitle("");
        setDescription("");
        setCategory("Other");
        setFile(null);
        setNewNews(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div><h1 className='text-3xl text-amber-400 m-2'>Welcome! Anuj Mishra</h1></div>
      <div className='flex flex-col sm:flex-row '>
        <section className='right-bar w-full sm:h-screen sm:w-[50%] bg-white text-amber-400 p-5 flex flex-col justify-center items-center gap-5'>
          <div className='info'>
            <p className='md:text-4xl'>Date : {currentDate}</p>
          </div>
          {!newNews && (<button onClick={() => setNewNews(true)} className='bg-black py-2 px-5 rounded-2xl cursor-pointer'>Create News</button>)}
          {newNews && (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-4 max-w-xl"
            >
              <input
                type="text"
                placeholder="News Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 rounded"
                required
              />

              <textarea
                placeholder="News Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 rounded"
                rows={6}
                required
              />

              <select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value as "Other" | "Report" | "Crime")
                }
                className="border p-2 rounded"
              >
                <option value="Crime">Crime</option>
                <option value="Report">Report</option>
                <option value="Other">Other</option>
              </select>

              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
              />

              {file && (
                <p className="text-sm">
                  Selected: {file.name}
                </p>
              )}

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-5 py-2 rounded"
                >
                  Submit
                </button>

                <button
                  type="button"
                  onClick={() => setNewNews(false)}
                  className="bg-red-500 text-white px-5 py-2 rounded"
                >
                  Cancel
                </button>

                <button
                  type="reset"
                  onClick={() => {
                    setTitle("");
                    setDescription("");
                    setCategory("Other");
                    setFile(null);
                  }}
                  className="bg-gray-700 text-white px-5 py-2 rounded"
                >
                  Reset
                </button>
              </div>
            </form>
          )}
        </section>
        <section className='left-bar w-full sm:w-[50%] bg-amber-300'>
          <h1 className='text-2xl font-bold text-black text-center p-2'>Your All News</h1>
          <NewsGrid news={news} />
        </section>
      </div>
    </div>
  )
}
