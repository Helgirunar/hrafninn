import styles from './Header.module.css';
import logo from '/raven.svg'

function Header() {
	return (
		<div className={styles.container}>
			<div className={styles.logoContainer}>
				<a href="#default">
					<img src={logo} className={styles.logo} alt="Raven Logo" />
				</a>
				<a href="#default">
					Hrafninn
				</a>
			</div>
		<div className={styles.linksContainer}>
			<a className="active" href="#home">Home</a>
			<a className="active" href="#home">Blog</a>
			<a href="#contact">Login</a>
		</div>
	</div>
	);
};

export default Header;
