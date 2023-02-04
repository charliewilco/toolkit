import { isDate, isEmpty, isIterable, isObject } from "../src/assert";

describe("Type assertions", () => {
	test("isObject()", () => {
		expect(isObject({})).toBe(true);
		expect(isObject([])).toBe(false);
		expect(isObject(null)).toBe(false);
		expect(isObject(undefined)).toBe(false);
		expect(isObject(1)).toBe(false);
		expect(isObject("string")).toBe(false);
		expect(isObject(new Date())).toBe(true);
	});

	test("isDate()", () => {
		expect(isDate(new Date())).toBe(true);
		expect(isDate(new Date("invalid date"))).toBe(false);
		expect(isDate("string")).toBe(false);
		expect(isDate(null)).toBe(false);
		expect(isDate(undefined)).toBe(false);
	});

	test.skip("isEmpty()", () => {
		expect(isEmpty([])).toBe(true);
		expect(isEmpty({})).toBe(true);
		expect(isEmpty("")).toBe(true);
		expect(isEmpty(" ")).toBe(true);
		expect(isEmpty(null)).toBe(true);
		expect(isEmpty(undefined)).toBe(true);
		expect(isEmpty([1])).toBe(false);
		expect(isEmpty({ a: 1 })).toBe(false);
		expect(isEmpty("a")).toBe(false);
	});

	test.skip("isIterable()", () => {
		expect(isIterable([])).toBe(true);
		expect(isIterable("")).toBe(true);
		expect(isIterable(new Set())).toBe(true);
		expect(isIterable(new Map())).toBe(true);
		expect(isIterable({})).toBe(false);
		expect(isIterable(1)).toBe(false);
		expect(isIterable(null)).toBe(false);
		expect(isIterable(undefined)).toBe(false);
	});
});
