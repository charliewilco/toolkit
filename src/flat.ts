export function flattenArray<T>(array: T[]): T[] {
	const result: T[] = [];
	flatten(array, result);
	return result;
}

export function flatten<T>(array: any[], result: T[]): void {
	let length = array.length;
	let ii = 0;

	while (length--) {
		const current = array[ii++];
		if (Array.isArray(current)) {
			flatten<T>(current, result);
		} else {
			result.push(current);
		}
	}
}
