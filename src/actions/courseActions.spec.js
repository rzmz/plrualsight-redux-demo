import test from 'ava';
import * as actions from './courseActions';
import * as ajax from './ajaxStatusActions';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
test('should create a CREATE_COURSE_SUCCESS action', t => {
	// arrange
	const course = {id: 'clean-code', title: 'Clean Code'};
	const expectedAction = {
		type: actions.CREATE_COURSE_SUCCESS,
		course: course
	};

	// act
	const action = actions.createCourseSuccess(course);

	// assert
	t.deepEqual(action, expectedAction);
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

test('should dispatch proper types of actions when loading courses', t => {
	const expectedActions = [
		{type: ajax.BEGIN_AJAX_CALL},
		{type: actions.LOAD_COURSES_SUCCESS, courses: [{id: 'clean-code', title: 'Clean Code'}]}
	];
	const store = mockStore({courses: []}, expectedActions);
	store.dispatch(actions.loadCourses()).then(() => {
		const storeActions = store.getActions();
		t.is(storeActions[0].type, ajax.BEGIN_AJAX_CALL);
		t.is(storeActions[1].type, actions.LOAD_COURSES_SUCCESS);
	});
});
