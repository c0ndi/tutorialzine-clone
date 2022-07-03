import styles from "./heroSection.module.scss";

function HeroSection() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.leftSection}>
					<h2>
						Welcome to
						<span>&nbsp;Tutorialzine!</span>
					</h2>
					<p>
						We are a community of talented developers who learn together. We have an ever-growing library of
						high-quality tutorials and articles that you can read completely for free!
					</p>
					<div>
						<button>
							<a href="#">Browse Content</a>
						</button>
					</div>
				</div>
				<div className={styles.rightSection}>
					<img src="/images/hero-section-photo.png" alt="Article static photo" />
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
