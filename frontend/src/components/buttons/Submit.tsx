import styles from './Submit.module.css';

interface ButtonProps{
	text: string;
}
function Submit(prop: ButtonProps) {

	return (
		<div className={styles.Container}>
			<button
				type="submit"
				className={styles.submitButton}
			>
			{prop.text}
			</button>
		</div>
	);
};

export default Submit;
