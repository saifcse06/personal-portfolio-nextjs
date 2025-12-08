import { Geist, Geist_Mono } from "next/font/google";
import "@/public/assets/css/bootstrap.css";

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Head from "@/components/Head"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <Head/>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
         <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
