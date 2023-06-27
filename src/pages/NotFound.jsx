import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="m-6 mx-auto w-[90%] max-w-[800px] flex flex-col gap-2 md:gap-4 bg-secondElevationDark p-3 justify-center align-center rounded-xl">
      <h2 className="dark:text-primaryLight font-bold text-center text-xl">404 Not Found</h2>
      <Link to="/home" className="text-center bg-accentLight text-primaryLight px-4 py-2 font-bold rounded-xl">
        Back To Home
      </Link>
    </div>
  );
}
