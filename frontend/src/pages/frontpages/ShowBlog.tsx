import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './ShowBlog.module.css';

function ShowBlog() {
	let {id} = useParams();
	const [blog, setBlog] = useState(Object);
	const [rendered, setRendered] = useState(false);
	useEffect(() => {
		// fetch....
		// Set the blog item
		const getblogDetails = async () => {
			await new Promise(resolve => setTimeout(resolve, 1000));
			setBlog({
				title:"Helgi",
				blogImage: "https://npr.brightspotcdn.com/dims4/default/b57a217/2147483647/strip/true/crop/1716x1144+0+0/resize/880x587!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F90%2F81%2Fb29603894d308800818f0fe6a1af%2F0p2a5737.JPG",
				content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				author:"Helgi",
				timeToRead:"5 minute read",
				createdAt: new Date(),
				updatedAt: new Date()
			});
			setRendered(true);
		}
		getblogDetails();
	}, []);
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.blogImageContainer}>
					{
						blog.blogImage ?
						<img src={blog.blogImage} className={styles.blogImage} alt="blog image"></img>
						:
						<></>
					}
				</div>
				<h2>{blog.title ?? ''}</h2>
			</div>
		</div>
	);
};

export default ShowBlog;
