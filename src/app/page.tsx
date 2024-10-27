import Header from "src/components/layout/Header";
import ProfilePicture from "src/components/profilePicture/ProfilePicture";
import TechStack from "src/components/techStack/TechStack";
import PortfolioButton from "src/components/portfolioButton/PortfolioButton";
import Portfolio from "src/components/portfolio/Portfolio";
import Footer from "src/components/layout/Footer";

import styles from "./page.module.scss";

export default function HomePage() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Header />
				<section>
					<ProfilePicture />
					<hr className={styles.hr} />
					<TechStack />
					<PortfolioButton />
				</section>

				<Portfolio />
			</main>
			<Footer />
		</div>
	);
}
