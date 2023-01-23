import * as assert from "../src/assert";

describe("isObject", () => {
	test("should return true for objects", () => {
		expect(assert.isObject({})).toBe(true);
		expect(assert.isObject(new Object())).toBe(true);
	});

	test("should return false for non-objects", () => {
		expect(assert.isObject(null)).toBe(false);
		expect(assert.isObject(undefined)).toBe(false);
		expect(assert.isObject(0)).toBe(false);
		expect(assert.isObject("")).toBe(false);
		expect(assert.isObject([])).toBe(false);
	});
});
