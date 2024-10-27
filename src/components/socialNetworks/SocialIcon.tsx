import Image from "next/image";

import styles from "./SocialIcon.module.scss";
import Link from "next/link";

type Props = {
	name: string;
};

export default function SocialIcon(props: Props) {
	const { name } = props;

	let uri = `https://${props.name}.com/`;
	let account = "";

	if (name === "linkedin") {
		account = "in/jauris-olivo";
	} else {
		account = "jaurisolivo";
	}

	uri += account;

	return (
		<li className={styles.item}>
			<Link href={uri} className={styles.link} target="_blank" title={props.name}>
				<Image
					src={`/assets/icons/${props.name}.svg`}
					alt={props.name}
					height={24}
					width={24}
					priority={true}
				/>
			</Link>
			<Link href={uri} target="_blank" title={props.name} className={styles.label}>
				{props.name}
			</Link>
		</li>
	);
}
