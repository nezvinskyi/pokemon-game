import { useHistory } from 'react-router-dom';
import { Btn } from '../../components';
// import css from './GamePage.module.css';

const GamePage = () => {
	const history = useHistory();
	const handleClickButton = () => {
		history.push('/');
	};
	return (
		<div>
			<h1>This is Game Page</h1>
			<Btn title="Back To Home" onClick={handleClickButton} />
		</div>
	);
};
export default GamePage;
