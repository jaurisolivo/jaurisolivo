import styles from "./TechStack.module.scss";

import techStack from "lib/techStack.json";

const TechStack = () => {
	const { stack } = techStack;

	return (
		<div className={styles.rootContainer}>
            <h4 className={styles.title}>Tech Stack</h4>
			<ul className={styles.list}>
				{stack.map((tech, index) => (
					<li key={index} className={styles.item}>
						{tech}
					</li>
				))}
			</ul>
		</div>
	);
};

export default TechStack;
