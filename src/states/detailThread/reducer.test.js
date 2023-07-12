import { describe, expect, it } from 'vitest';
import { ActionType } from './action';
import detailThreadReducer from './reducer';

describe('talk reducers function', () => {
  it.skip('Should return the detailThreads when RECEIVE_DETAIL_THREAD were given', () => {
    const initialState = {};
    const detailThread = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: ActionType.RECEIVE_DETAIL_THREAD,
      payload: {
        detailThread,
      },
    };

    const nextState = detailThreadReducer(initialState, action);

    expect(nextState).toEqual(action.payload.detailThread);
  });

  it.skip('Should return detailThread with userId in the upVotesBy key when UPVOTE_DETAIL_THREAD were given', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const userId = 'users-1';

    const action = {
      type: ActionType.UPVOTE_DETAIL_THREAD,
      payload: {
        userId,
      },
    };

    const nextState = detailThreadReducer(initialState, action);

    expect(nextState).toEqual({ ...initialState, upVotesBy: [userId] });
  });

  it.skip('Should return detailThread with no userId in the upVotesBy key when UPVOTE_DETAIL_THREAD were given', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: ['users-1'],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const userId = 'users-1';

    const action = {
      type: ActionType.UPVOTE_DETAIL_THREAD,
      payload: {
        userId,
      },
    };

    const nextState = detailThreadReducer(initialState, action);

    expect(nextState).toEqual({ ...initialState, upVotesBy: [] });
  });

  it('Should return detailThread with userId in the downVotesBy key when UPVOTE_DETAIL_THREAD were given', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const userId = 'users-1';

    const action = {
      type: ActionType.DOWNVOTE_DETAIL_THREAD,
      payload: {
        userId,
      },
    };

    const nextState = detailThreadReducer(initialState, action);

    expect(nextState).toEqual({ ...initialState, downVotesBy: [userId] });
  });

  it('Should return detailThread with userId in the downVotesBy key when UPVOTE_DETAIL_THREAD were given', () => {
    const userId = 'users-1';
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [userId],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: ActionType.DOWNVOTE_DETAIL_THREAD,
      payload: {
        userId,
      },
    };

    const nextState = detailThreadReducer(initialState, action);

    expect(nextState).toEqual({ ...initialState, downVotesBy: [] });
  });

  it('Should return detailThread with a comment that has been upvoted by the user when UPVOTE_COMMENT were given', () => {
    const userId = 'users-1';
    const commentId = 'comment-1';
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: ActionType.UPVOTE_COMMENT,
      payload: {
        userId,
        commentId,
      },
    };

    const nextState = detailThreadReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: initialState.comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, upVotesBy: [userId] };
        }
        return comment;
      }),
    });
  });

  it('Should return detailThread with a comment that has no userId on the upVotesBy when UPVOTE_COMMENT were given', () => {
    const userId = 'users-1';
    const commentId = 'comment-1';
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [userId],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: ActionType.UPVOTE_COMMENT,
      payload: {
        userId,
        commentId,
      },
    };

    const nextState = detailThreadReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: initialState.comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, upVotesBy: [] };
        }
        return comment;
      }),
    });
  });

  it('Should return detailThread with a comment that has userId on the downVotesBy when DOWNVOTE_THREAD were given', () => {
    const userId = 'users-1';
    const commentId = 'comment-1';
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: userId,
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [userId],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: ActionType.DOWNVOTE_COMMENT,
      payload: {
        userId,
        commentId,
      },
    };

    const nextState = detailThreadReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: initialState.comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, upVotesBy: [], downVotesBy: [userId] };
        }
        return comment;
      }),
    });
  });

  it('Should return detailThread with a comment that has no userId on the downVotesBy when DOWNVOTE_COMMENT were given', () => {
    const userId = 'users-1';
    const commentId = 'comment-1';
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: userId,
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: commentId,
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [userId],
        },
      ],
    };

    const action = {
      type: ActionType.DOWNVOTE_COMMENT,
      payload: {
        userId,
        commentId
      },
    };

    const nextState = detailThreadReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: initialState.comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, upVotesBy: [], downVotesBy: [] };
        }
        return comment;
      }),
    });
  });

  it('Should return detailThread with a new comment in it', () => {
    const userId = 'users-1';
    const newComment = {
      id: 'comment-2',
      content: 'Hi, I Miss You',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-2',
        name: 'Kurnia Kharisma',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
    };

    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: userId,
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [userId],
        },
      ],
    };

    const action = {
      type: ActionType.ADD_COMMENT,
      payload: {
        comment: newComment,
      },
    };

    const nextState = detailThreadReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [...initialState.comments, newComment],
    });
  });
});
