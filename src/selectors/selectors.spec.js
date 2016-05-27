import test from 'ava';
import { authorsFormattedForDropdown } from './selectors';

test('should return author data formatted for use in a dropdown', t => {
	const authors = [
		{id: 'cory-house', firstName: 'Cory', lastName: 'House'},
		{id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'}
	];
	const expected = [
		{value: 'cory-house', text: 'Cory House'},
		{value: 'scott-allen', text: 'Scott Allen'}
	];
	t.deepEqual(authorsFormattedForDropdown(authors), expected);
});
