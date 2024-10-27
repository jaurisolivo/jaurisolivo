import styles from "./Card.module.scss";

type Props = {
	children: JSX.Element;
};

const Card: React.FC<Props> = ({ children }) => {
	return <article className={styles.card}>{children}</article>;
};

export default Card;
