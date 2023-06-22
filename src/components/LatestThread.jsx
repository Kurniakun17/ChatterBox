import React from 'react';
import { Thread } from './Thread';

export const LatestThread = () => {
  const mockObj = [
    {
      title: 'How to make a good Sandwich',
      createdAt: '2 days ago',
      body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligulaas asdasdadasds asda sdasd asdasdasdasdasd asdasdaasd asdasdasd dsfadasd',
      vote: 42,
      author: 'Kurnia Kharisma',
      totalComments: 28,
    },
    {
      title: 'How to make a good Sandwich',
      createdAt: '2 days ago',
      body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligulaas asdasdadasds asda sdasd asdasdasdasdasd asdasdaasd asdasdasd dsfadasd',
      vote: 42,
      author: 'Kurnia Kharisma',
      totalComments: 28,
    },
    {
      title: 'How to make a good Sandwich',
      createdAt: '2 days ago',
      body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligulaas asdasdadasds asda sdasd asdasdasdasdasd asdasdaasd asdasdasd dsfadasd',
      vote: 42,
      author: 'Kurnia Kharisma',
      totalComments: 28,
    },
    {
      title: 'How to make a good Sandwich',
      createdAt: '2 days ago',
      body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligulaas asdasdadasds asda sdasd asdasdasdasdasd asdasdaasd asdasdasd dsfadasd',
      vote: 42,
      author: 'Kurnia Kharisma',
      totalComments: 28,
    },
    {
      title: 'How to make a good Sandwich',
      createdAt: '2 days ago',
      body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligulaas asdasdadasds asda sdasd asdasdasdasdasd asdasdaasd asdasdasd dsfadasd',
      vote: 42,
      author: 'Kurnia Kharisma',
      totalComments: 28,
    },
  ];
  return (
    <div className="flex flex-col gap-3 w-[90%] max-w-[500px] m-auto  ">
      <h2 className="font-bold dark:text-white text-2xl">Latest Thread</h2>
      <div className="flex flex-col gap-3">
        {mockObj.map((thread, index) => (
          <Thread
            key={`thread-${index}`}
            title={thread.title}
            createdAt={thread.createdAt}
            body={thread.body}
            vote={thread.vote}
            author={thread.author}
            totalComments={thread.totalComments}
            clamp={true}
          />
        ))}
      </div>
    </div>
  );
};
