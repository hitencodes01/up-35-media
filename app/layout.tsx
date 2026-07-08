import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UP 35 Media",
  description: "UP 35 Media is a local digital news platform dedicated to bringing timely, authentic news from Unnao, Uttar Pradesh, directly to the community. Covering crime reports, government updates, and everyday happenings, UP 35 Media is run by reporter Anuj Kumar Mishra with a mission to give a voice to Unnao's stories — because every city deserves credible, ground-level journalism.",
  icons: "/logo.jpeg",
  applicationName: "UP 35 Media",
  keywords: ["unnao news", "up 35", "local news unnao", "uttar pradesh", "bjp", "UP 35 Media is a local digital news platform dedicated to bringing timely, authentic news from Unnao, Uttar Pradesh, directly to the community. Covering crime reports, government updates, and everyday happenings, UP 35 Media is run by reporter Anuj Kumar Mishra with a mission to give a voice to Unnao's stories — because every city deserves credible, ground-level journalism."]

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
