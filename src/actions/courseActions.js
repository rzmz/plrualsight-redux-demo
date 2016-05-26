import courseApi from '../api/mockCourseApi';

export const types = {
	LOAD_COURSES_SUCCESS: 'LOAD_COURSES_SUCCESS',
	CREATE_COURSE_SUCCESS: 'CREATE_COURSE_SUCCESS',
	UPDATE_COURSE_SUCCESS: 'UPDATE_COURSE_SUCCESS'
};

export function loadCoursesSuccess(courses) {
	return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
	return { type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
	return { type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
	return (dispatch) => {
		return courseApi.getAllCourses()
			.then(courses => {
				dispatch(loadCoursesSuccess(courses));
			})
			.catch(error => {
				throw(error);
			});
	};
}

export function saveCourse(course) {
	return function(dispatch, getState) {
		const isUpdate = !!course.id;
		return courseApi.saveCourse(course).then(course => {
			dispatch(isUpdate ? updateCourseSuccess(course) : createCourseSuccess(course));
		})
		.catch(error => {
			throw(error);
		});
	};
}
