import { each, has, isPlainObject } from "../src/objects";

describe("each", () => {
	test("each function should iterate through object entries", () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3,
		};
		const result: Array<[number, string]> = [];
		each(obj, (value, key) => {
			result.push([value, key]);
		});
		expect(result).toEqual([
			[1, "a"],
			[2, "b"],
			[3, "c"],
		]);
	});

	test("each function should handle an empty object", () => {
		const obj = {};
		let iterationCount = 0;
		each(obj, () => {
			iterationCount++;
		});
		expect(iterationCount).toEqual(0);
	});

	test("each function should only iterate own properties", () => {
		const proto = { a: 1, b: 2 };
		const obj = Object.create(proto);
		obj.c = 3;
		obj.d = 4;

		const result: [any, any][] = [];
		each(obj, (value, key) => {
			result.push([key, value]);
		});

		expect(result).toEqual([
			["c", 3],
			["d", 4],
		]);
	});
});

describe("has", () => {
	test("has should return true for own properties", () => {
		const obj = { a: 1, b: 2 };
		expect(has(obj, "a")).toBe(true);
		expect(has(obj, "b")).toBe(true);
	});

	test("has should return false for inherited properties", () => {
		const proto = { a: 1 };
		const obj = Object.create(proto);
		expect(has(obj, "a")).toBe(false);
	});

	test("has should return false for non-existent properties", () => {
		const obj = { a: 1, b: 2 };
		expect(has(obj, "c")).toBe(false);
	});

	test("has should return false for non-object inputs", () => {
		// @ts-expect-error
		expect(has(null, "a")).toBe(false);
		// @ts-expect-error
		expect(has(undefined, "a")).toBe(false);
		// @ts-expect-error
		expect(has("", "a")).toBe(false);
		// @ts-expect-error
		expect(has(123, "a")).toBe(false);
		// @ts-expect-error
		expect(has(true, "a")).toBe(false);
		// @ts-expect-error
		expect(has(false, "a")).toBe(false);
	});
});

describe("isPlainObject", () => {
	test("isPlainObject should return true for plain objects", () => {
		expect(isPlainObject({})).toBe(true);
		expect(isPlainObject(new Object())).toBe(true);
	});

	test("isPlainObject should return false for non-objects", () => {
		expect(isPlainObject(null)).toBe(false);
		expect(isPlainObject(undefined)).toBe(false);
		expect(isPlainObject("")).toBe(false);
		expect(isPlainObject(123)).toBe(false);
		expect(isPlainObject(true)).toBe(false);
		expect(isPlainObject(false)).toBe(false);
	});

	test("isPlainObject should return false for objects with custom prototypes", () => {
		class Custom {}
		expect(isPlainObject(new Custom())).toBe(false);
	});

	test("isPlainObject should return false for arrays", () => {
		expect(isPlainObject([])).toBe(false);
	});
});
