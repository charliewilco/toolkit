import { describe, expect, it } from '@jest/globals';
import { createUID } from '../src/weak-unique-id';

describe('Unique ID', () => {
  it('is different', () => {
    expect(createUID()).not.toEqual(createUID());
  });

  it('maintains character', () => {
    expect(createUID().length).toEqual(36);
    expect(createUID().split('-').length).toEqual(5);
  });
});
