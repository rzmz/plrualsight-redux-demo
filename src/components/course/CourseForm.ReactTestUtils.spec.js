import test from 'ava';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
	let props = {
		course: {}, saving: saving, errors: {}, onSave: () => {}, onChange: () => {}, allAuthors: []
	};
	let renderer = TestUtils.createRenderer();
	renderer.render(<CourseForm {...props} />);
	let output = renderer.getRenderOutput();
	return {
		props,
		output,
		renderer
	};
}

test('CourseForm renders from and h1', t => {
	const { output } = setup();
	t.is(output.type, 'form');
	let [ h1 ] = output.props.children;
	t.is(h1.type, 'h1');
});

test('save button is labeled "Save" when not saving', t => {
	const { output } = setup(false);
	const submitButton = output.props.children[5];
	t.is(submitButton.props.value, 'Save');
});

test('save button is labeled "Saving..." when saving', t => {
	const { output } = setup(true);
	const submitButton = output.props.children[5];
	t.is(submitButton.props.value, 'Saving...');
});
