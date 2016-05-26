import courseApi from '../api/mockCourseApi';

export const types = {
	LOAD_COURSES_SUCCESS: 'LOAD_COURSES_SUCCESS'
};

export function loadCoursesSuccess(courses) {
	return { type: types.LOAD_COURSES_SUCCESS, courses };
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
