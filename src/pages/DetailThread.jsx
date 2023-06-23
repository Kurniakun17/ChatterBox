import React from 'react';
import { Vote } from '../components/Vote';
import { Navbar } from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Comment } from '../components/Comment';

export const DetailThread = () => {
  // const {id} = useParams();
  const thread = {
    id: '1',
    title: 'How to make a good Sandwich',
    createdAt: '2 days ago',
    body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligulaas asdasdadasds asda sdasd asdasdasdasdasd asdasdaasd asdasdasd dsfadasd',
    vote: 42,
    author: 'Kurnia Kharisma',
    totalComments: 28,
  };

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

  return (
    <div>
      <div className="flex flex-col gap-4 p-6 max-w-[800px] m-auto">
        <div className="flex flex-col gap-2 p-4 bg-secondElevationLight dark:bg-secondElevationDark rounded-xl">
          <div className="flex justify-between">
            <h3 className="text-lg font-bold text-primaryDark dark:text-white">
              {thread.title}
            </h3>
            <h4 className="block ml-3 box-content text-bodyTextLight dark:text-bodyTextDark">
              {thread.createdAt}
            </h4>
          </div>
          <p className={`text-bodyTextLight dark:text-bodyTextDark`}>
            {thread.body}
          </p>
          <div className="flex items-center justify-between">
            <Vote vote={thread.vote} />
            <div className="flex gap-2">
              <img src="/pfp.webp" alt="" className="w-6 h-6 rounded-full" />
              <h4 className="font-bold text-bodyTextLight dark:text-bodyTextDark">
                {thread.author}
              </h4>
            </div>
          </div>
        </div>
        <h2 className="dark:text-white font-bold text-xl">Comment ({80})</h2>
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
        {dummyComments.map((comment, index) => (
          <Comment
            key={`comment-${index}`}
            author={comment.author}
            createdAt={comment.createdAt}
            body={comment.body}
            vote={comment.vote}
          />
        ))}
      </div>
    </div>
  );
};
