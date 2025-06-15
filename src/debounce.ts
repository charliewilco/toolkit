/**
 *
 * @param func
 * @param wait
 * @returns
 */
export function debounce<Func extends (...args: any[]) => any>(func: Func, wait: number): Func {
	let timeout: number | undefined;
	return function (this: any, ...args: any[]) {
		const later = () => {
			timeout = undefined;
			func.apply(this, args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait) as any;
	} as Func;
}
