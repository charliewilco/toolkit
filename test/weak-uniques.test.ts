import { createWeakUID } from "../src/weak-unique-id";

describe("Unique ID", () => {
	test("is different", () => {
		expect(createWeakUID()).not.toEqual(createWeakUID());
	});

	test("maintains character", () => {
		expect(createWeakUID().length).toEqual(36);
		expect(createWeakUID().split("-").length).toEqual(5);
	});
});
