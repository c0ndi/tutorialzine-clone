import styles from "./singleArticle.module.scss";

export default function SingleArticle({ image, title, tags }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<img src={image} alt="" />
				<div className={styles.bottomBox}>
					<h3>{title}</h3>
					<div className={styles.bottomBoxTags}>
						{tags.map((tagName, key) => {
							return (
								<a href="#" className={styles.singleTag} key={key}>
									{tagName}
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
