import React from 'react';
import { NewThreadInput } from '../components/NewThreadInput';

export const NewThread = () => {
  return (
    <div className="mt-8 flex flex-col gap-3 w-[90%] bg-secondElevationLight dark:bg-secondElevationDark rounded-xl text-center p-4 py-6 max-w-[500px] m-auto">
      <h2 className="font-bold text-3xl dark:text-white">New Thread</h2>
      <NewThreadInput />
    </div>
  );
};
