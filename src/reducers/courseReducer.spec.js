import test from 'ava';
import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

test('course reducer should add course when passed CREATE_COURSE_SUCCESS', t => {
	// arrange
	const initialState = [
		{title: 'A'},
		{title: 'B'}
	];

	const newCourse = {title: 'C'};
	const action = actions.createCourseSuccess(newCourse);

	// act
	const newState = courseReducer(initialState, action);

	// assert
	t.is(newState.length, 3);
	t.is(newState[0].title, 'A');
	t.is(newState[1].title, 'B');
	t.is(newState[2].title, 'C');
});

test('Course reducer should update course when passed UPDATE_COURSE_SUCCESS', t => {
	// arrange
	const initialState = [
		{id: 'A', title: 'A'},
		{id: 'B', title: 'B'},
		{id: 'C', title: 'C'}
	];
	const course = {id: 'B', title: 'New Title'};
	const action = actions.updateCourseSuccess(course);
	// act
	const newState = courseReducer(initialState, action);
	const updatedCourse = newState.find(a => a.id === course.id);
	const untouchedCourse = newState.find(a => a.id === 'A');
	// assert
	t.is(updatedCourse.title, 'New Title');
	t.is(untouchedCourse.title, 'A');
	t.is(newState.length, 3);
});
