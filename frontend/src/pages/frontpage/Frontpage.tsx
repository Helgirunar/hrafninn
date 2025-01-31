import styles from './Frontpage.module.css';
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

function Frontpage() {
	return (
		<div className={styles.container}>
			<Header/>
			<section className={styles.content}>
				<h1>
					Hrafninn
				</h1>
				<p>Coming soon!</p>
			</section>
			<Footer/>
		</div>
	);
};

export default Frontpage;
