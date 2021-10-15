import {
	createListFailure,
	createListStart,
	createListSuccess,
	deleteListFailure,
	deleteListStart,
	deleteListSuccess,
	getListsFailure,
	getListsStart,
	getListsSuccess,
} from './ListActions';

import axios from 'axios';

export const getLists = async (dispatch) => {
	dispatch(getListsStart());
	try {
		const res = await axios.get('/lists', {
			headers: {
				token:
					'Bearer ' +
					JSON.parse(localStorage.getItem('user')).accessToken,
			},
		});
		dispatch(getListsSuccess(res.data));
	} catch (err) {
		dispatch(getListsFailure());
	}
};

// Create New
export const createList = async (list, dispatch) => {
	dispatch(createListStart());
	try {
		const res = await axios.post('/lists', list, {
			headers: {
				token:
					'Bearer ' +
					JSON.parse(localStorage.getItem('user')).accessToken,
			},
		});
		dispatch(createListSuccess(res.data));
	} catch (err) {
		dispatch(createListFailure());
	}
};

// Delete
export const deleteList = async (id, dispatch) => {
	dispatch(deleteListStart());
	try {
		await axios.delete('/lists/' + id, {
			headers: {
				token:
					'Bearer ' +
					JSON.parse(localStorage.getItem('user')).accessToken,
			},
		});
		dispatch(deleteListSuccess(id));
	} catch (err) {
		dispatch(deleteListFailure());
	}
};
