import styles from './BlogItem.module.css';
interface BlogItemProps{
	id: number,
	title: string;
	content: string;
	author: string;
	timeToRead: string;
	createdAt: Date;
	updatedAt: Date;
}

function BlogItem(prop: BlogItemProps) {
	return (
		<a className={styles.Container} href={`/blog/${prop.id}`}>
			<p className={styles.title}>{prop.title}</p>
			<div className={styles.detailContainer}>
				<div>{prop.author}{/*  - {prop.timeToRead} */}</div>
			</div>
			<p>{prop.content.substring(0,200)}...</p>
		</a>
	);
};

export default BlogItem;
