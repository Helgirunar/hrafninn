import { useContext, useState } from 'react';
import styles from './Header.module.css';
import colorStyles from '../../css/Color.module.css';
import logo from '/raven.svg'
import {AppContext} from '../../AppProvider';
import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import Button from '../buttons/Button';
import Button2 from '../buttons/Button2';

function Header() {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('AppContext must be used within an AppProvider');
	}

	const [isNavDown, setIsNavDown] = useState(false);

	const handleNav = () => {
		setIsNavDown(!isNavDown);
		
	}
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.logoContainer}>
					<a href="/" className={styles.logoLink}>
						<img src={logo} className={styles.logo} alt="Raven" />
						<h3 className={colorStyles.primaryText}>Hrafninn</h3>
					</a>
				</div>
				{context.isMobile ? 
				isNavDown ?
				<div onClick={ () => handleNav() } className={styles.navBarButton}>
					<BsX />
				</div>
				:
				<div onClick={ () => handleNav()} className={styles.navBarButton}>
					<BsList />
				</div>
				:
				<div className={styles.linksContainer}>
					<Button text="Home" url="/" underline={true} color="primary"/>
					<Button text="Blog" url="/blog" underline={true} color="primary"/>
					<Button2 text="Login" url="/login" underline={true} color="primary"/>
				</div>
				}
			</div>
			{
			(context.isMobile) ? 
				<div className={isNavDown ? styles.navBarContainer : styles.navBarContainerHide}>
					<Button text="Home" url="/" underline={false} color="secondary"/>
					<Button text="Blog" url="/blog" underline={false} color="secondary"/>
					<Button text="Login" url="/login" underline={false} color="secondary"/>
				</div>
			:
			<></>
			}
		</div>
	);
};

export default Header;
