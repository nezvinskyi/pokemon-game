import { useHistory } from 'react-router-dom';
import { Btn } from '../../components';

const NotFound = () => {
	const history = useHistory();
	const handleClickButton = () => {
		history.push('/');
	};
	return (
		<div>
			<h1>The page not found</h1>
			<Btn title="Back To Home" onClick={handleClickButton} />
		</div>
	);
};
export default NotFound;
