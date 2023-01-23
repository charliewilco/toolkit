export function pickRandom<T>(array: T[]): T {
	var i = ~~(Math.random() * array.length);
	return array[i];
}
