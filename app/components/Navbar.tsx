"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "../../public/css/navbar.css";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [active, setActive] = useState("about");

	useEffect(() => {
		const sections = document.querySelectorAll("section");
		const navLi = document.querySelectorAll(".nav-links li a");

		function changeActiveMenu() {
			sections.forEach((section) => {
				const top = window.scrollY;
				if (top >= (section.offsetTop - 100)) {
					setActive(section.getAttribute("id") || "");
				}
			});
		}

		window.addEventListener("scroll", changeActiveMenu);
		return () => window.removeEventListener("scroll", changeActiveMenu);
	}, []);

	return (
		<nav className="navbar navbar-expand-lg bg-light fixed-top shadow-sm">
			<div className="container">

				{/* Logo */}
				<Link href="/" className="navbar-brand d-flex align-items-center">
					<img
						src="/img/logo.png"
						alt="MD SAIF UDDIN"
						height={45}
						className="me-2"
					/>
				</Link>

				{/* Mobile Toggle */}
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#mainNavbar"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				{/* Menu */}
				<div className="collapse navbar-collapse" id="mainNavbar">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						{["about", "experience", "skills", "projects", "education", "certification", "contact"].map((item) => (
							<li className="nav-item" key={item}>
								<Link
									href={`#${item}`}
									className={`nav-link text-capitalize ${active === item ? "active fw-semibold" : ""
										}`}
									onClick={() => setActive(item)}
								>
									{item}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}