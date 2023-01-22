import { debounce } from '../src/debounce';

jest.useFakeTimers();

describe('debounce function', () => {
	let func: jest.Mock;
	let debouncedFunc: (...args: any[]) => any;

	beforeEach(() => {
		func = jest.fn();
		debouncedFunc = debounce(func, 100);
	});

	test('should call the debounced function only once within the wait time', () => {
		debouncedFunc();
		debouncedFunc();
		debouncedFunc();
		expect(func).toHaveBeenCalledTimes(0);
		jest.advanceTimersByTime(99);
		expect(func).toHaveBeenCalledTimes(0);
		jest.advanceTimersByTime(1);
		expect(func).toHaveBeenCalledTimes(1);
	});

	test('should call the debounced function with the correct arguments', () => {
		const args = [1, 2, 3];
		debouncedFunc(...args);
		jest.advanceTimersByTime(100);
		expect(func).toHaveBeenCalledWith(...args);
	});

	test('should call the debounced function with the correct context', () => {
		const context = {};
		debouncedFunc.call(context);
		jest.advanceTimersByTime(100);
		expect(func.mock.instances[0]).toBe(context);
	});

	test('should call the debounced function again if called after wait time', () => {
		debouncedFunc();
		jest.advanceTimersByTime(100);
		debouncedFunc();
		jest.advanceTimersByTime(100);
		expect(func).toHaveBeenCalledTimes(2);
	});
});
