// import "./globals.css";
import "../public/css/style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Saif | Software Engineer Portfolio",
  description: "Professional portfolio of Saif, Full Stack Software Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* External JS */}
        <script src="/js/main.js" defer></script>
        <script src="/js/navbar.js" defer></script>
      </body>
    </html>
  );
}