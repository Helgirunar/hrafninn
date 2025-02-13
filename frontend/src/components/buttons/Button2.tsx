import styles from './Button2.module.css';
import colorStyles from '../../css/Color.module.css';

interface ButtonProps{
	text: string;
	url: string;
	underline: boolean;
	color: string; /* primary secondary third fourth */
}
function Button2(prop: ButtonProps) {
	let textColor = '';
	let fillColor = '';
	if(prop.color === 'primary') {
		fillColor = colorStyles.primaryFill;
		textColor = colorStyles.secondaryText;
	}
	else if(prop.color === 'secondary') {
		fillColor = colorStyles.secondaryFill;
		textColor = colorStyles.primaryText;
	}

	return (
		<a
			href={prop.url}
			className={`${fillColor} ${textColor} ${styles.button}`}
		>
		{prop.text}
		</a>
	);
};

export default Button2;
