import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap

import './assets/css/styles.css'
import './assets/js/scripts.js'

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Profile of MD SAIF UDDIN ",
  description: "I am working as a software engineer over 10 years",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased d-flex flex-column h-100`}
      >
        <main className="flex-shrink-0">
         <Navbar />
        {children}
        </main>
        <Footer/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
