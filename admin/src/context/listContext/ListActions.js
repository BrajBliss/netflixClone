export const getListsStart = () => ({
	type: 'GET_LISTS_START',
});
export const getListsSuccess = (lists) => ({
	type: 'GET_LISTS_SUCCESS',
	payload: lists,
});
export const getListsFailure = () => ({
	type: 'GET_LISTS_FAILURE',
});

export const createListStart = () => ({
	type: 'CREATE_LIST_START',
});
export const createListSuccess = (list) => ({
	type: 'CREATE_LIST_SUCCESS',
	payload: list,
});
export const createListFailure = () => ({
	type: 'CREATE_LIST_FAILURE',
});

// export const updateMovieStart = () => ({
// 	type: 'UPDATE_MOVIE_START',
// });
// export const updateMovieSuccess = (movie) => ({
// 	type: 'UPDATE_MOVIE_SUCCESS',
// 	payload: movie,
// });
// export const updateMovieFailure = () => ({
// 	type: 'UPDATE_MOVIE_FAILURE',
// });

export const deleteListStart = () => ({
	type: 'DELETE_LIST_START',
});
export const deleteListSuccess = (id) => ({
	type: 'DELETE_LIST_SUCCESS',
	payload: id,
});
export const deleteListFailure = () => ({
	type: 'DELETE_LIST_FAILURE',
});
