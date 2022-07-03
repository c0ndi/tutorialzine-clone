import styles from "./latestArticles.module.scss";
import SingleArticle from "./Single Article";

function LatestArticles() {
	const articlesData = [
		{
			title: "Useful Git Tips that Every Developer Should Know",
			tags: ["Git"],
		},
		{
			title: "10 Machine Learning Examples in JavaScript",
			tags: ["JavaScript", "Resource"],
		},
		{
			title: "JavaScript Async/Await Explained in 10 Minutes",
			tags: ["JavaScript"],
		},
		{
			title: "15 Essential Plugins for Visual Studio Code",
			tags: ["Resources"],
		},
		{
			title: "Freebie: 4 Bootstrap Gallery Templates",
			tags: ["Freebie"],
		},
		{
			title: "10 Amazing JavaScript Games In Under 13kB of Code",
			tags: ["JavaScript", "Fun"],
		},
	];
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<h2>Latest articles</h2>
				<div className={styles.articlesBox}>
					{articlesData.map(({ title, tags }, key) => {
						return (
							<SingleArticle
								image={"/images/default-article-cover.png"}
								title={title}
								tags={tags}
								key={key}
							/>
						);
					})}
				</div>
				<div className={styles.btnBox}>
					<button>See all Articles</button>
				</div>
			</div>
		</div>
	);
}

export default LatestArticles;
