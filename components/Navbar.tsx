import Link from "next/link";

export default function Navbar(){
    return (
        <header className="header_area">
		<div className="main_menu">
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container">
					<a className="navbar-brand logo_h" href="index.html">
                        <img src="img/logo.png" alt="" /></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul className="nav navbar-nav menu_nav justify-content-end">
							<li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
							<li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
							<li className="nav-item"><a className="nav-link" href="services.html">Services</a></li>
							<li className="nav-item"><a className="nav-link" href="portfolio.html">Portfolio</a></li>
							<li className="nav-item submenu dropdown">
								<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false">Pages</a>
								<ul className="dropdown-menu">
									<li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
									<li className="nav-item"><a className="nav-link" href="portfolio-details.html">Portfolio Details</a></li>
								</ul>
							</li>
							<li className="nav-item submenu dropdown">
								<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false">Blog</a>
								<ul className="dropdown-menu">
									<li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
									<li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
								</ul>
							</li>
							<li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</header>
    );
}