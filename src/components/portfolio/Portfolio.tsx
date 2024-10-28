import ProjectItem from "./ProjectItem";
import projectsList from "lib/projects.json";

import styles from "./Portfolio.module.scss";

const Portfolio = () => {
	const { projects } = projectsList;

	return (
		<section id="portfolio" className={styles.portfolio}>
			<h2 className={styles.title}>portfolio</h2>
			<ul className={styles.list}>
				{projects
					.sort((a, b) => a.order - b.order)
					.map((project) => (
						<li key={project.name}>
							<ProjectItem {...project} />
						</li>
					))}
			</ul>
		</section>
	);
};

export default Portfolio;
