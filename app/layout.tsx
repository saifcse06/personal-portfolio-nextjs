// import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import "../public/css/style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";

export const metadata = {
  title: "Saif | Software Engineer Portfolio",
  description: "Professional portfolio of Saif, Full Stack Software Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TopBar/>
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