import test from 'ava';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
	const props = {
		course: {}, saving: saving, errors: {}, onSave: () => {}, onChange: () => {}, allAuthors: []
	};
	return shallow(<CourseForm {...props} />);
}

test('renders form and h1', t => {
	const wrapper = setup(false);
	t.is(wrapper.find('form').length, 1);
	t.is(wrapper.find('h1').text(), 'Manage Course');
});

test('save button is labeled "Save" when not saving', t => {
	const wrapper = setup(false);
	t.is(wrapper.find('input').props().value, 'Save');
});

test('save button is labeled "Saving..." when saving', t => {
	const wrapper = setup(true);
	t.is(wrapper.find('input').props().value, 'Saving...');
});
