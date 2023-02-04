export function fromEntriesReduced<K extends string, U>(
	iterable: Map<K, U>
): Record<string, U> {
	return [...iterable].reduce((obj: Record<string, U>, [key, val]) => {
		obj[key] = val;
		return obj;
	}, {});
}

/**
 * Convert a Map to a keyed object like `Object.fromEntries`
 * ([docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)).
 * Based on [`fromEntries()` ponyfill](https://github.com/feross/fromentries).
 * @param iterable
 */
export function fromEntries<K extends string, U>(
	iterable: Map<K, U>
): Record<string, U> {
	let object: Record<string, U> = {};

	for (let [key, val] of iterable) {
		object[key] = val;
	}

	return object;
}
