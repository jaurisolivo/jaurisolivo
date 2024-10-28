import Link from "next/link";
import Image from "next/image";

import styles from "./PortfolioButton.module.scss";

const PortfolioButton = () => {
	return (
		<div className={styles.btnContainer}>
			<Link href={"#portfolio"} className={styles.btn}>
				<span>Portfolio</span>
                <Image src="/assets/icons/down-arrow.svg" alt="" width={18} height={18} quality={100} />
			</Link>
		</div>
	);
};

export default PortfolioButton;
