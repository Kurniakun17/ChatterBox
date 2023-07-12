/* eslint-disable no-underscore-dangle */
import {
  afterEach, beforeEach, describe, expect, it, vi
} from 'vitest';
import asyncPopulateThreadAndUsers from './action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import { API } from '../../utils/api';

const threads = {
  threads: [
    {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 0,
    },
    {
      id: 'thread-2',
      title: 'Thread Kedua',
      body: 'Ini adalah thread kedua',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-2',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 0,
    },
  ],
};

const users = {
  users: [
    {
      id: 'john_doe',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    {
      id: 'jane_doe',
      name: 'Jane Doe',
      email: 'jane@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    {
      id: 'fulan',
      name: 'Si Fulan',
      email: 'fulan@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
  ],
};

const errorRespond = {
  respond: 'fetch failed',
};

describe('Shared action thunk test', () => {
  beforeEach(() => {
    API._getUsers = API.getUsers;
    API._getThread = API.getThread;
  });

  afterEach(() => {
    API.getUsers = API._getUsers;
    API.getThread = API._getThread;

    delete API._getUsers;
    delete API._getThread;
  });

  it('Should dispatch action correctly when action run successfully ', async () => {
    API.getThread = () => Promise.resolve(threads);
    API.getUsers = () => Promise.resolve(users);

    const dispatch = vi.fn();

    await asyncPopulateThreadAndUsers()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadsActionCreator({ threads })
    );
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator({ users }));
  });

  it('Should return correctly when action run failed', async () => {
    API.getThread = () => Promise.reject(errorRespond);
    API.getUsers = () => Promise.reject(errorRespond);

    window.alert = vi.fn();
    const dispatch = vi.fn();

    await asyncPopulateThreadAndUsers()(dispatch);

    expect(window.alert).toHaveBeenCalledWith(errorRespond.respond);
  });
});
