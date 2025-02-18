import styles from './Text.module.css';
interface TextProps{
	type: string;
	name: string;
	label?: string;
	required: boolean;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Text(prop: TextProps) {
	return (
		<div className={styles.Container} tabIndex={0}>
		<label className={styles.label} tabIndex={0}>{prop.label ?? prop.name}</label>
			<input 
				className={styles.input}
				type={prop.type}
				required={prop.required} 
				name={prop.name} 
				value={prop.value} 
				onChange={prop.onChange}
				tabIndex={0}
			/>
		</div>
	);
};

export default Text;
