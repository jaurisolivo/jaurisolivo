import Link from "next/link";
import Image from "next/image";

import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.copyrights}>© 2024 Jauris Olivo</p>
			<aside className={styles.cta}>
				<Link href={"#html"} className={styles.link}>
					<Image className={styles.icon} src="/assets/icons/up-arrow.svg" alt="" width={18} height={18} priority />
				</Link>
			</aside>
		</footer>
	);
};

export default Footer;
