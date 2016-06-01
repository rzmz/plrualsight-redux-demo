import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import languages from './languageReducer';
import { intlReducer } from 'react-intl-redux';

const rootReducer = combineReducers({
	courses, authors, ajaxCallsInProgress, languages, intl: intlReducer
});

export default rootReducer;
