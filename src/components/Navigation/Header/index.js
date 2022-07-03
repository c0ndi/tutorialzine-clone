import { useEffect, useRef, useState } from "react";
import styles from "./header.module.scss";

function SideMenu() {
	return (
		<div className={styles.sideMenuWrapper}>
			<div className={styles.sideMenuContent}>
				<a href="#" className={styles.sideMenuLogo}>
					tutorial<span>zine</span>
				</a>
				<ul>
					<li>
						<i className="icon-list"></i>
						<a href="#">Articles</a>
					</li>
				</ul>
				<a href="#" className={styles.sideMenuBtn}>
					Join Dev Awesome
				</a>
			</div>
		</div>
	);
}

function Header() {
	const [lightHeader, setLightHeader] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const header = useRef(null);
	const searchBar = useRef(null);
	const darkCover = useRef(null);
	const logo = useRef(null);

	function openSearch() {
		searchBar.current.style.transform = "translateY(0)";
		darkCover.current.style.transform = "translateY(0)";
		darkCover.current.style.opacity = "0.5";
		document.body.style.overflowY = "hidden";
		logo.current.style.color = "#fff";
	}

	function closeSearch() {
		searchBar.current.style.transform = "translateY(-100%)";
		darkCover.current.style.transform = "translateY(-100%)";
		darkCover.current.style.opacity = "0";
		document.body.style.overflowY = "scroll";
		logo.current.style.color = "";
	}

	function toggleSidebar() {
		if (!isOpen) {
			setIsOpen(true);

			document.body.style.transform = "translateX(260px)";
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflowY = "hidden";
			document.body.style.transform = "translateX(0)";
			setIsOpen(false);
		}
	}

	useEffect(() => {
		const headerListener = () => {
			if (window.scrollY > 60) {
				setLightHeader(true);
			} else setLightHeader(false);
		};

		let prevScroll = window.scrollY || document.documentElement.scrollTop;
		let curScroll;
		let direction = 0;
		let prevDirection = 0;

		function toggleHeader() {
			if (direction === 2 && curScroll > 80) {
				header.current.style.transform = "translateY(-100%)";
				prevDirection = direction;
			} else if (direction === 1) {
				header.current.style.transform = "translateY(0)";
				prevDirection = direction;
			}
		}

		function checkScroll() {
			curScroll = window.scrollY || document.documentElement.scrollTop;
			if (curScroll > prevScroll) {
				direction = 2;
			} else if (curScroll < prevScroll) {
				direction = 1;
			}

			if (direction !== prevDirection) {
				toggleHeader(direction, curScroll);
			}

			prevScroll = curScroll;
		}

		window.addEventListener("scroll", checkScroll);
		window.addEventListener("scroll", headerListener);

		return () => {
			window.addEventListener("scroll", checkScroll);
			window.addEventListener("scroll", headerListener);
		};
	}, []);

	return (
		<header className={lightHeader ? styles.lightWrapper : styles.wrapper} ref={header}>
			<div className={styles.searchBar} ref={searchBar}>
				<div>
					<input type="text" placeholder="Search..." />
					<a href="#0" onClick={closeSearch}>
						X
					</a>
				</div>
			</div>
			<div className={styles.darkCover} ref={darkCover}></div>
			<nav className={lightHeader ? styles.lightContent : styles.content}>
				<SideMenu />
				<div className={styles.iconMenu}>
					<i className="icon-menu" onClick={toggleSidebar}></i>
				</div>
				<a href="#" className={styles.logo} ref={logo}>
					tutorial<span>zine</span>
				</a>
				<ul className={styles.linksList}>
					<li>
						<a href="#">Articles</a>
					</li>
				</ul>
				<div className={styles.rightSection}>
					<i className="icon-magnifier" onClick={openSearch}></i>
					<a href="#" className={styles.btn}>
						Join Dev Awesome
					</a>
				</div>
			</nav>
		</header>
	);
}

export default Header;
