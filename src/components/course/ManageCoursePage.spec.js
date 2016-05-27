import test from 'ava';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

test('Manage Course Page - sets error message when trying to save empty title', t => {
	const props = {
		authors: [],
		actions: { saveCourse: () => { return Promise.resolve(); }},
		course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
	};
	const wrapper = mount(<ManageCoursePage {...props} />);
	const saveButton = wrapper.find('input').last();
	t.is(saveButton.prop('type'), 'submit');
	saveButton.simulate('click');
	t.is(wrapper.state().errors.title, 'Title must be at least 5 characters.');
});
