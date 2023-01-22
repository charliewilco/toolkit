import { fromEntries, fromEntriesReduced } from '../src/from-entries';

describe('fromEntries', () => {
	test('basic', () => {
		const map = new Map([
			['a', 1],
			['b', 2],
			['c', 3],
		]);
		const o = fromEntries(map);

		expect(o.a).toBe(1);
		expect(o.b).toBe(2);
		expect(o.c).toBe(3);
	});

	test('reducer', () => {
		const map = new Map([
			['a', 1],
			['b', 2],
			['c', 3],
		]);
		const o = fromEntriesReduced(map);

		expect(o.a).toBe(1);
		expect(o.b).toBe(2);
		expect(o.c).toBe(3);
	});
});
