import styles from './Button.module.css';
import colorStyles from '../../css/Color.module.css';

interface ButtonProps{
	text: string;
	url: string;
	underline: boolean;
	color: string; /* primary secondary third fourth */
}
function Button(prop: ButtonProps) {
	let color = '';
	if(prop.color === 'primary') {
		color = colorStyles.primaryText;
	}
	else if(prop.color === 'secondary') {
		color = colorStyles.secondaryText;
	}

	return (
		<a
			href={prop.url}
			className={`
				${prop.underline ? styles.underline : ''} 
				${color}
			`}
		>
		{prop.text}
		</a>
	);
};

export default Button;
