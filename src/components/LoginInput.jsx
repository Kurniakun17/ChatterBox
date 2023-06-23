import React from 'react';
import { useInput } from '../hooks/useInput';

export const LoginInput = () => {
  const [name, setName] = useInput();
  const [password, setPassword] = useInput();

  return (
    <div className="flex flex-col gap-3">
      <input
        className="bg-thirdElevationLight placeholder:font-bold font-bold  dark:bg-thirdElevationDark w-full rounded-xl p-3 text-sm md:text-base dark:text-primaryLight"
        value={name}
        onChange={(e) => {
          setName(e);
        }}
        type="text"
        placeholder="NAME"
      />
      <input
        className="bg-thirdElevationLight placeholder:font-bold font-bold  dark:bg-thirdElevationDark w-full rounded-xl p-3 text-sm md:text-base dark:text-primaryLight"
        value={password}
        onChange={(e) => {
          setPassword(e);
        }}
        type="password"
        placeholder="PASSWORD"
      />
    </div>
  );
};
