/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PokemonsContext } from '../../../../context/pokemonsContext';
import { PokemonCard, PlayerBoard, Result } from '../../../../components';
import css from './Board.module.css';

const counterWin = (board, player1, player2) => {
	let player1Count = player2.length;
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
	const { pokemons, setPlayer1Pokemons, setPlayer2Pokemons } = useContext(PokemonsContext);

	const [board, setBoard] = useState([]);
	const [player1, setPlayer1] = useState(() =>
		Object.values(pokemons).map((item) => ({
			...item,
			possession: 'blue',
		})),
	);
	const [player2, setPlayer2] = useState([]);
	const [choiceCard, setChoiceCard] = useState(null);
	const [steps, setSteps] = useState(0);
	const [result, setResult] = useState(null);

	const history = useHistory();

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
	}, []);

	if (Object.keys(pokemons).length === 0) {
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
				if (item.card.possession === 'blue') {
					player1Pokemons.push(item.card);
				}
				if (item.card.possession === 'red') {
					player2Pokemons.push(item.card);
				}
			});

			setPlayer1Pokemons(player1Pokemons);
			setPlayer2Pokemons(player2Pokemons);

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
						setChoiceCard(card);
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
						setChoiceCard(card);
					}}
				/>
			</div>
			{result && <Result type={result} onClick={handleResultClick} />}
		</div>
	);
};

export default BoardPage;
