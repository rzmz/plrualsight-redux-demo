import {LOAD_AUTHORS_SUCCESS} from '../actions/authorActions';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
	switch(action.type) {
		case LOAD_AUTHORS_SUCCESS:
			return action.authors;
		default:
			return state;
	}
}
