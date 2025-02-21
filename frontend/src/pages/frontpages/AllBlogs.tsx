import styles from './AllBlogs.module.css';
import BlogItem from '../../components/blog/BlogItem'

function allBlogs() {
	return (
		<div className={styles.container}>
			{/* <h1>Blog</h1>  */}
			<div className={styles.content}>
					<BlogItem 
						id={1}
						title="Helgi" 
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
						author="Helgi"
						timeToRead="5 minute read"
						createdAt={new Date()}
						updatedAt={new Date()}
					/>
					<BlogItem 
						id={2}
						title="Helgi" 
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
						author="Helgi"
						timeToRead="5 minute read"
						createdAt={new Date()}
						updatedAt={new Date()}
					/>
					<BlogItem 
						id={3}
						title="Helgi" 
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
						author="Helgi"
						timeToRead="5 minute read"
						createdAt={new Date()}
						updatedAt={new Date()}
					/>
					<BlogItem 
						id={4}
						title="Helgi" 
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
						author="Helgi"
						timeToRead="5 minute read"
						createdAt={new Date()}
						updatedAt={new Date()}
					/>
			</div>
		</div>
	);
};

export default allBlogs;
