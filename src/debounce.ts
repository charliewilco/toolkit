export function debounce<F extends (...args: any[]) => any>(
	func: F,
	wait: number
): F {
	let timeout: number | undefined;
	return function (this: any, ...args: any[]) {
		const context = this;
		const later = () => {
			timeout = undefined;
			func.apply(context, args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait) as any;
	} as F;
}
