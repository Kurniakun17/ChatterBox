import React from 'react';
import { RegisterInput } from '../components/RegisterInput';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-5xl font-bold text-white logo">ChatterBox</h1>
      <div className="w-[90%] max-w-[600px] flex flex-col gap-4 bg-secondElevationLight dark:bg-secondElevationDark p-6 rounded-2xl">
        <RegisterInput></RegisterInput>
        <button className="bg-accentLight dark:bg-accentLight text-white w-full rounded-3xl p-2 font-bold">
          REGISTER
        </button>
      </div>
      <p className="mt-4 dark:text-white">
        Didn't have an account yet?{' '}
        <Link
          className="text-accentLight font-bold underline decoration-solid"
          to="/login"
        >
          Login
        </Link>
      </p>
    </div>
  );
};
