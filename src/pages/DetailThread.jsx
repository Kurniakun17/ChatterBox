import React, { useEffect } from 'react';
import { Vote } from '../components/Vote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Comment } from '../components/Comment';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveDetailThread } from '../states/detailThread/action';
import TimeAgo from 'timeago-react';
import parser from 'html-react-parser';

export const DetailThread = () => {
  const { id } = useParams();
  const thread = useSelector((states) => states.detailThread);
  const dispatch = useDispatch();
  const screenWidth = screen.width;

  useEffect(() => {
    dispatch(asyncReceiveDetailThread({ id }));
  }, []);

  const dummyComments = [
    {
      id: '1',
      title: 'First Comment',
      createdAt: '3 days ago',
      body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligulaas asdasdadasds asda sdasd asdasdasdasdasd asdasdaasd asdasdasd dsfadasd',
      vote: 2,
      author: 'Kurnia Kharisma',
      totalComments: 28,
    },
    {
      id: '1',
      title: 'First Comment',
      createdAt: '3 days ago',
      body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligulaas asdasdadasds asda sdasd asdasdasdasdasd asdasdaasd asdasdasd dsfadasd',
      vote: 0,
      author: 'Kurnia Kharisma',
      totalComments: 28,
    },
  ];
  if (!Object.keys(thread).length) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div>
      <div className="flex flex-col gap-4 p-6 max-w-[800px] m-auto">
        <div className="flex flex-col gap-2 p-4 bg-secondElevationLight dark:bg-secondElevationDark rounded-xl">
          <div
            className={
              screenWidth < 600 ? `flex flex-col gap-2` : `flex justify-between`
            }
          >
            <h3 className="text-lg font-bold text-primaryDark dark:text-white">
              {thread.title}
            </h3>
            <h4 className="block box-content text-bodyTextLight dark:text-bodyTextDark font-bold">
              <TimeAgo datetime={thread.createdAt} />
            </h4>
          </div>
          <span className={`text-bodyTextLight dark:text-bodyTextDark`}>
            {parser(thread.body)}
          </span>
          <div className="flex items-center justify-between">
            <Vote score={thread.upVotesBy.length} />
            <div className="flex gap-2">
              <img src="/pfp.webp" alt="" className="w-6 h-6 rounded-full" />
              <h4 className="font-bold text-bodyTextLight dark:text-bodyTextDark">
                {thread.owner.name}
              </h4>
            </div>
          </div>
        </div>
        <h2 className="dark:text-white font-bold text-xl">
          Comment ({thread.comments.length})
        </h2>
        <div className="flex gap-2 md:gap-4 bg-secondElevationDark p-3 rounded-xl">
          <input
            type="text"
            placeholder="Write a comment"
            className="bg-thirdElevationLight placeholder:font-bold font-bold dark:text-primaryLight dark:bg-thirdElevationDark w-full rounded-xl p-3 text-sm"
          />
          <button className="pb-2 pt-3 px-4 bg-accentDark rounded-xl">
            <FontAwesomeIcon className="text-white" icon={faPaperPlane} />
          </button>
        </div>
        {thread.comments.length === 0 && (
          <div className="flex gap-2 justify-center md:gap-4 bg-secondElevationDark p-3 rounded-xl">
            <h3 className="dark:text-primaryLight font-bold">
              Comment is Empty {':)'}
            </h3>
          </div>
        )}
        {thread.comments.map((comment, index) => (
          <Comment
            key={`comment-${index}`}
            author={comment.author}
            createdAt={comment.createdAt}
            content={comment.content}
            score={comment.upVotesBy.length}
            owner={comment.owner}
          />
        ))}
      </div>
    </div>
  );
};
