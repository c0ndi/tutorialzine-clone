import styles from "./footer.module.scss";

function Footer() {
	return (
		<footer className={styles.content}>
			<h3>A community that learns together.</h3>
			<ul>
				<li>
					<a href="#">Article License</a>
				</li>
				<li>
					<a href="#">Terms and Conditions</a>
				</li>
				<li>
					<a href="#">Privacy Policy</a>
				</li>
				<li>
					<a href="#">Contact Form</a>
				</li>
				<li>
					<a href="#">The Book</a>
				</li>
			</ul>
			<p>Copyright © Zine EOOD. All Rights Reserved.</p>
			<ul>
				<li>
					<a href="#">
						<i className="icon-social-facebook"></i>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="icon-social-twitter"></i>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="icon-social-github"></i>
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
