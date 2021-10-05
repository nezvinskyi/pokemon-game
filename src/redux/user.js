/* eslint-disable no-prototype-builtins */
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		isLoading: true,
		data: {},
	},

	reducers: {
		fetchUser: () => ({
			isLoading: true,
		}),
		updateUser: (state, { payload }) => ({
			isLoading: false,
			data: payload,
		}),
		removeUser: () => ({
			isLoading: false,
			data: {},
		}),
	},
});

export const { fetchUser, updateUser, removeUser } = userSlice.actions;

export const selectUserLoading = (state) => state.user.isLoading;
export const selectUser = (state) => state.user.data;
export const selectLocalId = (state) => state.user.data?.localId;

export const getUserUpdateAsync = () => async (dispatch) => {
	const idToken = localStorage.getItem('idToken');
	if (idToken) {
		const requestOptions = {
			method: 'POST',
			body: JSON.stringify({
				idToken,
			}),
		};

		const response = await fetch(
			`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.REACT_APP_API}`,
			requestOptions,
		).then((res) => res.json());

		if (response.hasOwnProperty('error')) {
			localStorage.removeItem('idToken');
			dispatch(removeUser());
		} else {
			dispatch(updateUser(response.users[0]));
		}
	} else {
		dispatch(removeUser());
	}
};

export const getUserAsync = () => async (dispatch) => {
	dispatch(fetchUser());
	dispatch(getUserUpdateAsync());
};

export default userSlice.reducer;
