import React from 'react';
import { Navbar } from '../components/Navbar';

export const NewThread = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[90%] text-center p-4 py-6 max-w-[500px] m-auto">
        <h2 className="font-bold">New Thread</h2>
        
        <button className="bg-accentDark text-white p-3">POST</button>
      </div>
    </div>
  );
};
