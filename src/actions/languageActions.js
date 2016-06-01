import { update } from 'react-intl-redux';

export const types = {
	LOAD_LANGUAGES: 'LOAD_LANGUAGES'
};

// todo: fetch translations from the server
export function changeLanguage(language) {
	return (dispatch, getState) => {
		dispatch(update({locale: language, messages: {'app.kala': 'juust'}}));
	};
}

// todo: load languages from the server
export function loadLanguages() {
	return { type: types.LOAD_LANGUAGES, languages: ['en', 'et', 'de', 'es', 'hu', 'pl', 'ro', 'ru', 'uk'] };
}
