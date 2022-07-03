import DevAwesomeSection from "./components/Layout/Dev Awesome";
import HeroSection from "./components/Layout/Hero Section";
import LatestArticles from "./components/Layout/Latest Articles";
import Footer from "./components/Navigation/Footer";
import Header from "./components/Navigation/Header";

function App() {
	return (
		<div style={{ overflow: "hidden" }}>
			<Header />
			<HeroSection />
			<LatestArticles />
			<DevAwesomeSection />
			<Footer />
		</div>
	);
}

export default App;
