import { describe, expect, it } from 'vitest';
import { preloadReducer } from './reducer';
import { setPreloadActionCreator } from './action';

/**
 * test scenario for preload
 *
 * - preloadReducer function
 *  - should return value that the action give
 */

describe('preload reducer test', () => {
  it('Should return value that the action give', () => {
    const action = setPreloadActionCreator(false);
    const value = preloadReducer(action);
    expect(value.payload.preload).toEqual(false);
  });
});
