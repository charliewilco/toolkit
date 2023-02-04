export function each<T extends object>(
	obj: T,
	cb: (value: T[keyof T], key: keyof T) => void
): void {
	for (const key in obj) {
		if (has(obj, key)) {
			cb(obj[key], key);
		}
	}
}

// Avoid false positives with .__proto__, .hasOwnProperty, etc.
export function has<T extends object>(obj: T, key: string | number) {
	if (obj === null || obj === undefined) {
		return false;
	}
	return {}.hasOwnProperty.call(obj, key);
}

export function isEmptyObject(value: unknown): value is object {
	if (!isPlainObject(value)) {
		return false;
	}
	return Object.keys(value).length === 0;
}

export function isPlainObject(value: unknown): value is object {
	if (typeof value !== "object" || value === null) {
		return false;
	}
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null;
}
