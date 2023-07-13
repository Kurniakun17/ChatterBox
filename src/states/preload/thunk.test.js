/* eslint-disable no-underscore-dangle */
import {
  afterEach, beforeEach, describe, expect, it, vi
} from 'vitest';
import { API } from '../../utils/api';
import { asyncPreloadProcess, setPreloadActionCreator } from './action';
import { setAuthUserActionCreator } from '../authUser/action';

const user = {
  id: 'john_doe',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

/**
* test scenario for preload
*
* - preloadThunk function
*  - Should dispatch the correct action when asyncpreloadprocess called successfully
*  - Should dispatch the correct action when asyncpreloadprocess called failed
*/

describe('preload thunk test', () => {
  beforeEach(() => {
    API._getOwnProfile = API.getOwnProfile;
  });

  afterEach(() => {
    API.getOwnProfile = API._getOwnProfile;
    delete API._getOwnProfile;
  });

  it('Should dispatch the correct action when asyncpreloadprocess called successfully', async () => {
    API.getOwnProfile = () => Promise.resolve(user);

    const dispatch = vi.fn();

    await asyncPreloadProcess()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(user));
    expect(dispatch).toHaveBeenCalledWith(setPreloadActionCreator(false));
  });

  it('Should dispatch the correct action when asyncpreloadprocess called failed', async () => {
    API.getOwnProfile = () => Promise.reject();

    const dispatch = vi.fn();

    await asyncPreloadProcess()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null));
    expect(dispatch).toHaveBeenCalledWith(setPreloadActionCreator(false));
  });
});
