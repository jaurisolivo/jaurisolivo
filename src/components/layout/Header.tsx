import SocialIcon from "../socialNetworks/SocialIcon";
import styles from "./Header.module.scss";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<ul className={styles.list}>
					<SocialIcon name="github" />
					<SocialIcon name="linkedin" />
					<SocialIcon name="instagram" />
				</ul>
			</div>
		</header>
	);
}
