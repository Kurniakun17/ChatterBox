import React from 'react';

export function RegisterInput({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
}) {
  return (
    <div className="flex flex-col gap-3">
      <input
        value={name}
        onChange={(e) => {
          setName(e);
        }}
        type="text"
        placeholder="NAME"
        className="bg-thirdElevationLight font-bold placeholder:font-bold dark:bg-thirdElevationDark w-full rounded-xl p-3 text-sm md:text-base dark:text-primaryLight"
      />
      <input
        value={email}
        onChange={(e) => {
          setEmail(e);
        }}
        type="text"
        placeholder="EMAIL"
        className="bg-thirdElevationLight font-bold placeholder:font-bold dark:bg-thirdElevationDark w-full rounded-xl p-3 text-sm md:text-base dark:text-primaryLight"
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e);
        }}
        type="password"
        placeholder="PASSWORD"
        className="bg-thirdElevationLight font-bold placeholder:font-bold dark:bg-thirdElevationDark w-full rounded-xl p-3 text-sm md:text-base dark:text-primaryLight"
      />
    </div>
  );
}
