import { describe, expect, it } from '@jest/globals';
import { createWeakUID } from '../src/weak-unique-id';

describe('Unique ID', () => {
  it('is different', () => {
    expect(createWeakUID()).not.toEqual(createWeakUID());
  });

  it('maintains character', () => {
    expect(createWeakUID().length).toEqual(36);
    expect(createWeakUID().split('-').length).toEqual(5);
  });
});
