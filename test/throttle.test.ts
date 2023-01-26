import { throttle } from "../src/throttle";

describe("throttle function", () => {
	let callback: jest.Mock;
	let throttledCallback: (...args: any[]) => any;

	beforeEach(() => {
		jest.useFakeTimers();
		callback = jest.fn();
		throttledCallback = throttle(callback);
	});

	afterEach(() => {
		jest.clearAllTimers();
		jest.clearAllMocks();
	});

	test("should call the callback function immediately when leading is true", () => {
		throttledCallback = throttle(callback, { leading: true });
		throttledCallback();
		expect(callback).toHaveBeenCalled();
	});

	test("should call the callback function after the interval when leading is false", () => {
		throttledCallback = throttle(callback, { leading: false, interval: 1000 });
		throttledCallback();
		jest.advanceTimersByTime(999);
		expect(callback).not.toHaveBeenCalled();
		jest.advanceTimersByTime(1);
		expect(callback).toHaveBeenCalled();
	});

	test.skip("should call the callback function at most maxCalls times", () => {
		throttledCallback = throttle(callback, { maxCalls: 2 });
		throttledCallback();
		throttledCallback();
		throttledCallback();
		expect(callback).toHaveBeenCalledTimes(2);
	});

	test("should call the callback function on the trailing edge when trailing is true", () => {
		throttledCallback = throttle(callback, { trailing: true, interval: 1000 });
		throttledCallback();
		jest.advanceTimersByTime(999);
		throttledCallback();
		jest.advanceTimersByTime(1);
		expect(callback).toHaveBeenCalledTimes(1);
	});

	test.skip("should not call the callback function on the trailing edge when trailing is false", () => {
		throttledCallback = throttle(callback, { trailing: false, interval: 1000 });
		throttledCallback();
		jest.advanceTimersByTime(999);
		throttledCallback();
		jest.advanceTimersByTime(1);
		expect(callback).toHaveBeenCalledTimes(1);
	});
});
