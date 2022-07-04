import { describe, expect, it } from '@jest/globals';
import { fromEntries, fromEntriesReduced } from '../src/from-entries';

describe('fromEntries', () => {
  it('basic', () => {
    const map = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    const o = fromEntries(map);

    expect(o.a).toBe(1);
    expect(o.b).toBe(2);
    expect(o.c).toBe(3);
  });

  it('reducer', () => {
    const map = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    const o = fromEntriesReduced(map);

    expect(o.a).toBe(1);
    expect(o.b).toBe(2);
    expect(o.c).toBe(3);
  });
});
