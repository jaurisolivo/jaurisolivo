import Link from "next/link";
import styles from "./PortfolioButton.module.scss";



const PortfolioButton= () => {
	return (
		<div className={styles.btnContainer}>
			<Link href={"#portfolio"} className={styles.btn}>Portfolio</Link>
		</div>
	);
};

export default PortfolioButton;
