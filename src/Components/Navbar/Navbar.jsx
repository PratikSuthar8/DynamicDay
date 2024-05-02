import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/DDayLogo.webp";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
	const location = useLocation();
	const isLinkActive = (link) => {
		return location.pathname === link;
	};
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (window.scrollY > 20) {
			setIsSticky(true);
		} else {
			setIsSticky(false);
		}
		if (window.scrollY > 500) {
			setShowScrollUpBtn(true);
		} else {
			setShowScrollUpBtn(false);
		}
	};

	const toggleMenu = () => {
		const menu = document.querySelector(".menu");
		menu.classList.toggle("active");
		const menuBtnIcon = document.querySelector(".menu-btn i");
		menuBtnIcon.classList.toggle("active");
	};

	return (
		<nav className={isSticky ? "navbar sticky" : "navbar"}>
			<div className="max-width">
				<div className="logo">
					<Link to="/">
						<img
							src={logo}
							className="brand-logo"
							alt="DDay Tech"
						/>
					</Link>
				</div>
				<ul className="menu">
					<li>
						<Link
							to="/"
							className={
								isLinkActive("/")
									? "menu-btn active"
									: "menu-btn"
							}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/about"
							className={
								isLinkActive("/")
									? "menu-btn active"
									: "menu-btn"
							}
						>
							About Us
						</Link>
					</li>
					<li>
						<Link
							to="/solution"
							className={
								isLinkActive("/")
									? "menu-btn active"
									: "menu-btn"
							}
						>
							Solutions
						</Link>
					</li>
					<li>
						<Link
							to="/services"
							className={
								isLinkActive("/")
									? "menu-btn active"
									: "menu-btn"
							}
						>
							Services
						</Link>
					</li>
					<li>
						<Link
							to="/industries"
							className={
								isLinkActive("/")
									? "menu-btn active"
									: "menu-btn"
							}
						>
							Industries
						</Link>
					</li>
					<li>
						<Link
							to="/contact"
							className={
								isLinkActive("/")
									? "menu-btn active"
									: "menu-btn"
							}
						>
							Contact Us
						</Link>
					</li>
					<li>
						<Link
							to="/blog"
							className={
								isLinkActive("/")
									? "menu-btn active"
									: "menu-btn"
							}
						>
							Blogs
						</Link>
					</li>
				</ul>
				<div className="menu-btn" onClick={toggleMenu}>
					<i className="fas fa-bars"></i>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
