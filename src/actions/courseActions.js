export const types = {
	CREATE_COURSE: 'CREATE_COURSE'
};

export function createCourse(course) {
	return { type: types.CREATE_COURSE, course };
}
