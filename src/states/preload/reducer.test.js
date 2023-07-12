import { describe, expect, it } from 'vitest';
import { preloadReducer } from './reducer';
import { setPreloadActionCreator } from './action';

describe('preload reducer test', () => {
  it('Should return what the action give', () => {
    const action = setPreloadActionCreator(false);
    const value = preloadReducer(action);
    expect(value.payload.preload).toEqual(false);
  });
});
