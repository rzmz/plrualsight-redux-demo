/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-intl-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';
import { changeLanguage, loadLanguages } from './actions/languageActions';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadLanguages());

function setLanguage() {
	if (this.state.params.language) {
		store.dispatch(changeLanguage(this.state.params.language));
	}
}

render(
	<Provider store={store}>
		<Router history={browserHistory} children={routes} onUpdate={setLanguage} />
	</Provider>,
	document.getElementById('app')
);
