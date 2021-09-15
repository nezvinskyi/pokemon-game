import { useHistory } from 'react-router-dom';
import { Btn } from '../../components';

const Contact = () => {
	const history = useHistory();

	const handleClickButton = () => {
		history.push('/');
	};
	return (
		<>
			<h1>This is Contact page</h1>
			<Btn title="Back To Home" onClick={handleClickButton} />
		</>
	);
};
export default Contact;
