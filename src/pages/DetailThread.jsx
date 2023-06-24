import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TimeAgo from 'timeago-react';
import parser from 'html-react-parser';
import {
  asyncAddComment,
  asyncReceiveDetailThread,
} from '../states/detailThread/action';
import { Comment } from '../components/Comment';
import { Vote } from '../components/Vote';
import { useInput } from '../hooks/useInput';

export function DetailThread({ authUser }) {
  const { id } = useParams();
  const thread = useSelector((states) => states.detailThread);
  const dispatch = useDispatch();
  const [content, , setContentHTML] = useInput('Text');

  useEffect(() => {
    dispatch(asyncReceiveDetailThread({ id }));
  }, []);

  const onSendHandler = () => {
    dispatch(asyncAddComment({ threadId: thread.id, content }));
  };

  if (!Object.keys(thread).length) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className="flex flex-col gap-4 p-6 max-w-[800px] m-auto">
      <div className="flex flex-col gap-2 p-4 bg-secondElevationLight dark:bg-secondElevationDark rounded-xl">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold text-primaryDark dark:text-white">
            {thread.title}
          </h3>
          <h4 className="block box-content text-bodyTextLight dark:text-bodyTextDark font-bold">
            <TimeAgo datetime={thread.createdAt} />
          </h4>
        </div>
        <span className="text-bodyTextLight dark:text-bodyTextDark">
          {parser(thread.body)}
        </span>
        <div className="flex items-center justify-between">
          <Vote
            score={thread.upVotesBy.length - thread.downVotesBy.length}
            isUpVote={thread.upVotesBy.includes(authUser.id)}
            isDownVote={thread.downVotesBy.includes(authUser.id)}
            threadId={thread.id}
            caller="DETAIL_THREAD"
          />
          <div className="flex gap-2">
            <img
              src={thread.owner.avatar}
              alt=""
              className="w-6 h-6 rounded-full"
            />
            <h4 className="font-bold text-bodyTextLight dark:text-bodyTextDark">
              {thread.owner.name}
            </h4>
          </div>
        </div>
      </div>
      <h2 className="dark:text-white font-bold text-xl">
        Comment (
        { thread.comments.length }
        )
      </h2>
      <div className="flex gap-2 md:gap-4 bg-secondElevationDark p-3 rounded-xl">
        <div
          placeholder="Write a comment"
          className="bg-thirdElevationLight  dark:text-primaryLight dark:bg-thirdElevationDark w-full rounded-xl p-3 text-sm"
          contentEditable
          onInput={(e) => {
            setContentHTML(e);
          }}
        />
        <button
          className="pb-2 pt-3 px-4 bg-accentLight rounded-xl"
          onClick={onSendHandler}
        >
          <FontAwesomeIcon className="text-white" icon={faPaperPlane} />
        </button>
      </div>
      {thread.comments.length === 0 && (
        <div className="flex gap-2 justify-center md:gap-4 bg-secondElevationDark p-3 rounded-xl">
          <h3 className="dark:text-primaryLight font-bold">
            Comment is Empty
            {' '}
            :)
          </h3>
        </div>
      )}
      {
        (thread.comments.sort((a, b) => b.createdAt - a.createdAt)
          .map((comment) => (
            <Comment
              key={`comment-${comment.id}`}
              threadId={id}
              author={comment.author}
              createdAt={comment.createdAt}
              content={comment.content}
              score={comment.upVotesBy.length - comment.downVotesBy.length}
              owner={comment.owner}
              commentId={comment.id}
              isUpVote={comment.upVotesBy.includes(authUser.id)}
              isDownVote={comment.downVotesBy.includes(authUser.id)}
            />
          )))
      }
    </div>
  );
}
