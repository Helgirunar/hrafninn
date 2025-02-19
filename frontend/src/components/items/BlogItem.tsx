import styles from './BlogItem.module.css';
interface BlogItemProps{
	title: string;
	content: string;
	author: string;
	timeToRead: string;
	createdAt: Date;
	updatedAt: Date;
}

function BlogItem(prop: BlogItemProps) {
	return (
		<div className={styles.Container}>
			<p className={styles.title}>{prop.title}</p>
			<div className={styles.detailContainer}>
				<div>{prop.author}{/*  - {prop.timeToRead} */}</div>
			</div>
			<p>{prop.content.substring(0,200)}...</p>
		</div>
	);
};

export default BlogItem;
