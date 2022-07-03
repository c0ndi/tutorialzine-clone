import styles from "./devAwesome.module.scss";

function DevAwesomeSection() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.leftSection}>
					<img src="/images/dev-awesome-section-photo.png" alt="" />
				</div>
				<div className={styles.rightSection}>
					<h2>Dev Awesome</h2>
					<p>
						A weekly newsletter full of programming news, cool libraries, and productivity tips. Subscribe
						now and join over
						<span>&nbsp;80k developers!</span>
					</p>
					<div>
						<a href="#">Join Dev Awesome</a>
					</div>
				</div>
			</div>
			<img src="/images/world.svg" alt="" className={styles.world} />
		</div>
	);
}

export default DevAwesomeSection;
