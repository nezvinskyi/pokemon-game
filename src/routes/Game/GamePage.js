import { Btn } from '../../components';
// import css from './GamePage.module.css';

const GamePage = ({ onChangePage }) => {
	const handleClickButton = () => {
		onChangePage && onChangePage('app');
	};
	return (
		<div>
			<h1>This is Game Page</h1>
			<Btn title="Back To Home" handler={handleClickButton} />
		</div>
	);
};
export default GamePage;
