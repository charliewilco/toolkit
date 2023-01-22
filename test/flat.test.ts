import { flattenArray } from '../src/flat';

describe('Flatten array', () => {
	test('works', () => {
		const base = [1, 2, [3, 4, 5, [6, 7, [8, 9, 10]]]];

		expect(flattenArray(base)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		expect(flattenArray(base)).not.toEqual([1, 2, 3, 4, 5, 6, 7, [8, 9, 10]]);
		expect(flattenArray(base)).not.toEqual([1, 2, 3, 4, 5, [6, 7, [8, 9, 10]]]);
	});
});
