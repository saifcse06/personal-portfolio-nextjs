"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "../../public/css/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".nav-links li a");

    function changeActiveMenu() {
      sections.forEach((section) => {
        const top = window.scrollY;
        if (top >= (section.offsetTop - 300)) {
          setActive(section.getAttribute("id") || "");
        }
      });
    }

    window.addEventListener("scroll", changeActiveMenu);
    return () => window.removeEventListener("scroll", changeActiveMenu);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="logo">
          <Link href="/">
		  	<img src="/img/logo.png" className="logo" alt="MD SAIF UDDIN" />
			{/* Saif<span>Dev</span> */}
		  </Link>
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item}`}
                className={active === item ? "active" : ""}
                onClick={() => {
                  setActive(item);
                  setMenuOpen(false);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
        </div>
      </div>
    </nav>
  );
}