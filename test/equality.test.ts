import { isShallowEqual, isDeepEqual } from "../src/equality";

describe("Equality", () => {
	test("shallow equality", () => {
		const obj1 = { a: 1, b: 2 };
		const obj2 = { a: 1, b: 2 };
		const obj3 = { a: 2, b: 2 };
		const obj4 = { a: 1, b: 2, c: 3 };

		expect(isShallowEqual(obj1, obj2)).toBe(true);
		expect(isShallowEqual(obj1, obj3)).toBe(false);
		expect(isShallowEqual(obj1, obj4)).toBe(false);
	});

	test("deep equality", () => {
		const obj1 = { a: { b: 1 } };
		const obj2 = { a: { b: 1 } };
		const obj3 = { a: { b: 2 } };
		const obj4 = { a: { b: 1, c: 3 } };

		expect(isDeepEqual(obj1, obj2)).toBe(true);
		expect(isDeepEqual(obj1, obj3)).toBe(false);
		expect(isDeepEqual(obj1, obj4)).toBe(false);
	});
});
