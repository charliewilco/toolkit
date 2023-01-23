export function isObject(item: unknown): boolean;
export function isObject(item: unknown): item is object {
	return !!item && typeof item === "object" && !Array.isArray(item);
}

export function isDate(date: any): boolean;
export function isDate(date: any): date is Date {
	// https://stackoverflow.com/questions/10589732/checking-if-a-date-is-valid-in-javascript
	return date instanceof Date && !isNaN(date.valueOf());
}

export function isEmpty(value: unknown): boolean {
	if (Array.isArray(value)) {
		return value.length === 0;
	}

	if (typeof value === "object" && value !== null) {
		return Object.keys(value).length === 0;
	}

	if (typeof value === "string") {
		return value.replace(/\s/g, "") !== "";
	}

	return value !== null && value !== undefined;
}

export function isIterable(value: any): boolean {
	if (typeof Symbol === "undefined") {
		return false;
	}
	return value[Symbol.iterator];
}
