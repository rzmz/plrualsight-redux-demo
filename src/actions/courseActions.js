import courseApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';
export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';
export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';

export function loadCoursesSuccess(courses) {
	return { type: LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
	return { type: CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
	return { type: UPDATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
	return (dispatch) => {
		dispatch(beginAjaxCall());
		return courseApi.getAllCourses()
			.then(courses => {
				dispatch(loadCoursesSuccess(courses));
			})
			.catch(error => {
				dispatch(ajaxCallError(error));
				throw(error);
			});
	};
}

export function saveCourse(course) {
	return function(dispatch, getState) {
		dispatch(beginAjaxCall());
		const isUpdate = !!course.id;
		return courseApi.saveCourse(course).then(course => {
			dispatch(isUpdate ? updateCourseSuccess(course) : createCourseSuccess(course));
		})
		.catch(error => {
			dispatch(ajaxCallError(error));
			throw(error);
		});
	};
}
