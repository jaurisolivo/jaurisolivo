import Image from "next/image";
import parse from 'html-react-parser';


import styles from "./ProfilePicture.module.scss";

const ProfilePicture = () => {
    const devWord = "developer";
    const spacedDevWord = parse(devWord.split("").join("&nbsp;"))

	return (
		<div className={styles.rootContainer}>
			<article className={styles.imageContainer}>
				<Image
					className={styles.picture}
					src="/assets/images/profile-picture.jpeg"
					alt="Jauris Olivo - Picture"
					fill
					sizes="300px"
					priority
					quality={100}
				/>
			</article>
			<div className={styles.texts}>
				<h1 className={styles.title}>Jauris Olivo</h1>
				<h2 className={styles.text}>
					fullstack web<span className={styles.subText}> & </span>mobile
					<br />
					<span>{spacedDevWord}</span>
				</h2>
			</div>
		</div>
	);
};

export default ProfilePicture;
