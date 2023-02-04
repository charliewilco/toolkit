type ThrottleOptions = {
	leading?: boolean;
	trailing?: boolean;
	maxCalls?: number;
	interval?: number;
	logging?: boolean;
};

export function unstable_throttle<T extends (...args: any[]) => any>(
	fn: T,
	options: ThrottleOptions = {}
): T {
	let lastCall = 0;
	let lastExecution = 0;
	let timer: any = null;
	let leading = options.leading || false;
	let trailing = options.trailing !== false;
	let maxCalls = options.maxCalls || Infinity;
	let calls = 0;
	let interval = options.interval || 0;

	return function (this: any, ...args: any[]) {
		const now = Date.now();
		if (options.logging) {
			console.group("throttle");
			console.log("now", now);
			console.log("lastCall", lastCall);
			console.log("lastExecution", lastExecution);
			console.log("timer", timer);
			console.groupEnd();
		}
		calls++;
		if (calls > maxCalls) {
			clearTimeout(timer);
			timer = null;
			return;
		}
		if (leading && !timer) {
			fn.apply(this, args);
			lastExecution = now;
		}

		if (!timer) {
			timer = setTimeout(() => {
				timer = null;
				if (trailing) {
					fn.apply(this, args);
					lastExecution = now;
				}
			}, interval);
		}

		lastCall = now;
	} as T;
}
