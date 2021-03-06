/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PokemonCard, PlayerBoard, Result, ArrowChoice } from '../../../../components';
import css from './Board.module.css';
import {
	selectSelectedPokemons,
	setPlayer1Pokemons,
	setPlayer2Pokemons,
} from '../../../../redux/pokemons';

const counterWin = (board, player1, player2) => {
	let player1Count = player1.length;
	let player2Count = player2.length;

	board.forEach((item) => {
		if (item.card.possession === 'red') {
			player2Count++;
		}
		if (item.card.possession === 'blue') {
			player1Count++;
		}
	});
	return [player1Count, player2Count];
};

const BoardPage = () => {
	const dispatch = useDispatch();
	const pokemons = useSelector(selectSelectedPokemons);

	const [board, setBoard] = useState([]);
	const [player1, setPlayer1] = useState(() =>
		pokemons.map((item) => ({
			...item,
			possession: 'blue',
		})),
	);
	const [player2, setPlayer2] = useState([]);
	const [choiceCard, setChoiceCard] = useState(null);
	const [steps, setSteps] = useState(0);
	const [result, setResult] = useState(null);
	const [side, setSide] = useState(0);
	const [stop, setStop] = useState(false);

	const history = useHistory();

	const animateArrow = () => {
		let selectSide = null;

		setTimeout(() => {
			clearInterval(selectSide);
		}, 3000);

		selectSide = setInterval(async () => {
			if (Math.random() < 0.5) {
				await setSide(1);
			} else await setSide(2);
		}, 500);
	};

	useEffect(async () => {
		const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
		const boardRequest = await boardResponse.json();

		setBoard(boardRequest.data);

		const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
		const player2Request = await player2Response.json();

		setPlayer2(() =>
			player2Request.data.map((item) => ({
				...item,
				possession: 'red',
			})),
		);
		await animateArrow();
	}, []);

	if (pokemons.length === 0) {
		history.replace('/game');
	}

	const handleClickBoardPlate = async (position) => {
		if (choiceCard) {
			const params = {
				position,
				card: choiceCard,
				board,
			};

			const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(params),
			});

			const request = await res.json();

			if (choiceCard.player === 1) {
				setPlayer1((prevState) => prevState.filter((item) => item.id !== choiceCard.id));
			}

			if (choiceCard.player === 2) {
				setPlayer2((prevState) => prevState.filter((item) => item.id !== choiceCard.id));
			}

			setBoard(request.data);
			setSteps((prevState) => prevState + 1);
			setChoiceCard(null);
		}
	};

	const handleResultClick = () => {
		history.push('/game/finish');
	};

	useEffect(() => {
		if (steps === 9) {
			const [count1, count2] = counterWin(board, player1, player2);

			const player1Pokemons = [];
			const player2Pokemons = [];

			board.forEach((item) => {
				delete item.card.selected;
				if (item.card.possession === 'blue') {
					player1Pokemons.push(item.card);
				}
				if (item.card.possession === 'red') {
					player2Pokemons.push(item.card);
				}
			});

			dispatch(setPlayer1Pokemons(player1Pokemons));
			dispatch(setPlayer2Pokemons(player2Pokemons));

			if (count1 > count2) {
				setResult('win');
			} else if (count1 < count2) {
				setResult('lose');
			} else {
				setResult('draw');
			}
		}
	}, [steps]);

	return (
		<div className={css.root}>
			<div className={css.playerOne}>
				<PlayerBoard
					player={1}
					cards={player1}
					onClickCard={(card) => {
						setStop(true);
						(side === 1 || side === 0) && setChoiceCard(card);
						setSide(2);
					}}
				/>
			</div>
			<div className={css.board}>
				{board.map((item) => (
					<div
						key={item.position}
						className={css.boardPlate}
						onClick={() => !item.card && handleClickBoardPlate(item.position)}
					>
						{item.card && <PokemonCard {...item.card} isActive minimize />}
					</div>
				))}
			</div>
			<div className={css.playerTwo}>
				<PlayerBoard
					player={2}
					cards={player2}
					onClickCard={(card) => {
						setStop(true);
						(side === 2 || side === 0) && setChoiceCard(card);
						setSide(1);
					}}
				/>
			</div>
			{result && <Result type={result} onClick={handleResultClick} />}
			{stop === false && <ArrowChoice side={side} stop={stop} />}
		</div>
	);
};

export default BoardPage;
