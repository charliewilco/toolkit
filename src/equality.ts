export function isShallowEqual<T>(a: T, b: T): boolean {
	if (a === b) return true;
	if (!a || !b) return false;
	if (typeof a !== typeof b) return false;
	if (typeof a === "object") {
		if (Object.keys(a).length !== Object.keys(b).length) return false;
		for (let key in a) {
			if (a[key] !== b[key]) return false;
		}
		return true;
	}
	return false;
}

export function isDeepEqual<T>(a: T, b: T): boolean {
	if (a === b) return true;
	if (!a || !b) return false;
	if (typeof a !== typeof b) return false;
	if (typeof a === "object") {
		if (Array.isArray(a) !== Array.isArray(b)) return false;
		if (Object.keys(a).length !== Object.keys(b).length) return false;
		for (let key in a) {
			if (!isDeepEqual(a[key], b[key])) return false;
		}
		return true;
	}
	return a === b;
}
