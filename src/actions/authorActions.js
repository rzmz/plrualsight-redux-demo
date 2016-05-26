import authorApi from '../api/mockAuthorApi';

export const types = {
	LOAD_AUTHORS_SUCCESS: 'LOAD_AUTHORS_SUCCESS'
};

export function loadAuthorsSuccess(authors) {
	return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
	return (dispatch) => {
		return authorApi.getAllAuthors()
			.then(authors => {
				dispatch(loadAuthorsSuccess(authors));
			})
			.catch(error => {
				throw(error);
			});
	};
}
