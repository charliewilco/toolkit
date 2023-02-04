/**
 * 
 * @param func 
 * @param wait 
 * @returns 
 */
export function debounce<Func extends (...args: any[]) => any>(
	func: Func,
	wait: number
): Func {
	let timeout: number | undefined;
	return function (this: any, ...args: any[]) {
		const context = this;
		const later = () => {
			timeout = undefined;
			func.apply(context, args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait) as any;
	} as Func;
}
