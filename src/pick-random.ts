export function pickRandom<T>(array: T[]): T {
	let i = ~~(Math.random() * array.length);
	return array[i];
}
