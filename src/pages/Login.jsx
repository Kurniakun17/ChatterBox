import React from 'react';
import { LoginInput } from '../components/LoginInput';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-5xl font-bold text-white logo">ChatterBox</h1>
      <div className="w-[90%] max-w-[600px] flex flex-col gap-4 bg-secondElevationLight dark:bg-secondElevationDark p-6 rounded-2xl">
        <LoginInput></LoginInput>
        <button className="bg-accentLight dark:bg-accentLight text-white w-full rounded-3xl p-2 font-bold">
          LOG IN
        </button>
      </div>
      <p className="mt-4">
        Didn't have an account yet?{' '}
        <Link
          className="text-accentLight font-bold underline decoration-solid"
          to="/register"
        >
          Register
        </Link>
      </p>
    </div>
  );
};
