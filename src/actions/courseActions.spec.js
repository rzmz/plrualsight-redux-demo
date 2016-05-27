import expect from 'expect';
import * as actions from './courseActions';
import * as ajax from './ajaxStatusActions';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('Course Actions', () => {
	describe('createCourseSuccess', () => {
		it('should create a CREATE_COURSE_SUCCESS action', () => {
			// arrange
			const course = {id: 'clean-code', title: 'Clean Code'};
			const expectedAction = {
				type: actions.CREATE_COURSE_SUCCESS,
				course: course
			};

			// act
			const action = actions.createCourseSuccess(course);

			// assert
			expect(action).toEqual(expectedAction);
		});
	});
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
	afterEach(() => {
		nock.cleanAll();
	});

	it('should dispatch proper types of actions when loading courses', (done) => {
		// here's an example call to nock
		// nock('http://example.com')
		// 	.get('/courses')
		// 	.reply(200, {body: {course: [{id: 1, firstName: 'Cory', lastName: 'House'}]}});

		const expectedActions = [
			{type: ajax.BEGIN_AJAX_CALL},
			{type: actions.LOAD_COURSES_SUCCESS, courses: [{id: 'clean-code', title: 'Clean Code'}]}
		];

		const store = mockStore({courses: []}, expectedActions);
		store.dispatch(actions.loadCourses()).then(() => {
			const storeActions = store.getActions();
			try {
				expect(storeActions[0].type).toEqual(ajax.BEGIN_AJAX_CALL);
				expect(storeActions[1].type).toEqual(actions.LOAD_COURSES_SUCCESS);
				done();
			} catch(err) {
				done(err);
			}
		});
	});
});
