import styles from './Login.module.css';
import { useState } from 'react';
import Text from '../../components/input/text/Text';
import Submit from '../../components/buttons/Submit';

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className={styles.container}>
			<form className={styles.form}>
				<Text type="text" required={true} label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				<Text type="password" required={true} label="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				{/* <input type="text"  required={true} name="email" value={email} onChange={(e) => setEmail(e.target.value)}/> */}
				<Submit text="Skrá inn"/>
			</form>
		</div>
	);
};

export default Login;
