import { describe, expect, it } from '@jest/globals';
import * as assert from '../src/assert';

describe('Assertions', () => {
  it('objects', () => {
    expect(assert.isObject({})).toBeTruthy();
    expect(assert.isObject('')).toBeFalsy();
    expect(assert.isObject([])).toBeFalsy();
  });
});
