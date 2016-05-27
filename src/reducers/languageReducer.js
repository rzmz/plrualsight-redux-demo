import { types } from '../actions/languageActions';
import initialState from './initialState';

export default function languageReducer(state = initialState.languages, action) {
	switch(action.type) {
		case types.LOAD_LANGUAGES:
			return action.languages;
		default:
			return state;
	}
}
