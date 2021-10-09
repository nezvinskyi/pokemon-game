/* eslint-disable no-plusplus */
export const returnBoard = (board) => {
	console.log('board :>> ', board);
	const normBoard = board.map((item, idx) => {
		let card = null;
		if (typeof item === 'object') {
			card = {
				...item.poke,
				possession: item.holder === 'p1' ? 'blue' : 'red',
			};
		}
		return {
			position: idx + 1,
			card,
		};
	});
	console.log('normBoard :>> ', normBoard);
	return normBoard;
};

export const counterWin = (board, player1, player2) => {
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
