import React from 'react';
import { Navbar } from '../components/Navbar';
import { NewThreadInput } from '../components/NewThreadInput';

export const NewThread = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-8 flex flex-col gap-3 w-[90%] bg-secondElevationLight dark:bg-secondElevationDark rounded-xl text-center p-4 py-6 max-w-[500px] m-auto">
        <h2 className="font-bold text-3xl dark:text-white">New Thread</h2>
        <NewThreadInput />
        <button className="bg-accentLight dark:bg-accentLight text-white w-full mt-2 rounded-3xl p-2 font-bold">
          POST
        </button>
      </div>
    </div>
  );
};
