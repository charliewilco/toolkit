export interface MegaSetStatics {
	union<T>(...sets: Set<T>[]): IMegaSet<T>;
	intersection<T>(...sets: Set<T>[]): IMegaSet<T>;
	difference<T>(...sets: Set<T>[]): IMegaSet<T>;
	symmetricDifference<T>(setA?: IMegaSet<T>, setB?: IMegaSet<T>): IMegaSet<T>;
	subset<T>(setA: Set<T>, setB: Set<T>): boolean;
	superset<T>(setA: Set<T>, setB: Set<T>): boolean;
	map<T>(
		set: Set<T>,
		func: (value: T, index?: number, array?: T[]) => unknown
	): IMegaSet<unknown>;
	filter<T>(
		set: Set<T>,
		func: (value: T, index?: number, array?: T[]) => unknown
	): IMegaSet<T>;
	reduce<T>(
		set: Set<T>,
		func: (
			previousValue: T,
			currentValue: T,
			currentIndex: number,
			array: T[]
		) => any,
		initializer?: any
	): T;
}

export interface IMegaSet<T> extends Set<T> {
	union(...sets: Set<T>[]): IMegaSet<T>;
	intersection(...sets: Set<T>[]): IMegaSet<T>;
	difference(...sets: Set<T>[]): IMegaSet<T>;
	symmetricDifference(other?: IMegaSet<T>): IMegaSet<T>;
	subset(other: Set<T>): boolean;
	superset(other: Set<T>): boolean;
	map(
		func: (value: T, index?: number, array?: T[]) => unknown
	): IMegaSet<unknown>;
	filter(func: (value: T, index?: number, array?: T[]) => unknown): IMegaSet<T>;
	reduce(
		func: (
			previousValue: T,
			currentValue: T,
			currentIndex: number,
			array: T[]
		) => any,
		initializer?: any
	): T;
}

export class MegaSet<T> extends Set<T> {}
