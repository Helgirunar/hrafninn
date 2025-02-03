import styles from './Card.module.css';

interface CardProps{
	title?: string;
	children: React.ReactNode;
}
function Card(prop: CardProps) {
	return (
		<div className={styles.card}>
		{
			prop.title ? <h2>{prop.title}</h2> : ''
		}
		<div className={styles.cardContent}>{prop.children}</div>
		</div>
	);
};

export default Card;
