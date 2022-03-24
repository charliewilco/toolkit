import { isObject } from './assert';
// type KeyComparer<T, U> = (
//   value: keyof T,
//   other: keyof U,
//   key?: string | number | symbol
// ) => boolean;
// type Comparer<T, U> = (value: T, other: U) => boolean;

// type ComparerFunc<T, U> = Comparer<T, U> | KeyComparer<T, U>;

export function shallowEqual<T, U>(objA: T, objB: U) {
  switch (typeof objA) {
    case 'string':
    case 'number':
    case 'bigint':
      return objA === objB;
  }

  if (typeof objA === 'string') {
  }

  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (Object.is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
    return false;
  }

  var keysA = Object.keys(objA) as Array<keyof T>;
  var keysB = Object.keys(objB) as Array<keyof U>;

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key: keyof T | keyof U | string | number | symbol = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    // @ts-expect-error
    var valueB = objB[key];

    ret = compare
      ? (compare as KeyComparer<T, U>).call(compareContext, valueA, valueB, key)
      : void 0;

    if (ret === false || (ret === void 0 && !Object.is(valueA, valueB))) {
      return false;
    }
  }

  return true;
}
