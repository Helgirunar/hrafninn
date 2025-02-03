import { useContext, useState } from 'react';
import styles from './Header.module.css';
import logo from '/raven.svg'
import {AppContext} from '../../AppProvider';
import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";

function Header() {
	const { isMobile } = useContext(AppContext);
	const [isNavDown, setIsNavDown] = useState(false);

	const handleNav = () => {
		setIsNavDown(!isNavDown);
	}
	return (
		<div className={styles.container}>
			<div className={styles.logoContainer}>
				<a href="/" className={styles.logoLink}>
					<img src={logo} className={styles.logo} alt="Raven" />
					<h3 className={styles.links}>Hrafninn</h3>
				</a>
			</div>
			{isMobile ? 
			isNavDown ?
			<div onClick={ () => handleNav()} className={styles.navBarButton}>
				<BsX />
			</div>
			:
			<div onClick={ () => handleNav()} className={styles.navBarButton}>
				<BsList />
			</div>
			:
			<div className={styles.linksContainer}>
				<a href="/" className={styles.link}>Home</a>
				<a href="/blog" className={styles.link}>Blog</a>
				<a href="/login" className={styles.link}>Login</a>
			</div>
			}
			{
			(isMobile && isNavDown) ? 
				<div className={styles.navBarContainer}>
					<a href="/" className={styles.navBarLink}>Home</a>
					<a href="/blog" className={styles.navBarLink}>Blog</a>
					<a href="/login" className={styles.navBarLink}>Login</a>
				</div>
			:
			<></>
			}
	</div>
	);
};

export default Header;
