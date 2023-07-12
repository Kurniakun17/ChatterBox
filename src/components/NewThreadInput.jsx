import React from 'react';
import { useInput } from '../hooks/useInput';

export function NewThreadInput({ onPostHandler }) {
  const [title, setTitle] = useInput();
  const [category, setCategory] = useInput();
  const [body, setBody] = useInput();

  const onPostClickHandler = () => {
    onPostHandler({ title, body, category });
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <input
          value={title}
          onChange={(e) => {
            setTitle(e);
          }}
          type="text"
          placeholder="TITLE"
          className="text-primaryDark dark:text-primaryLight bg-thirdElevationLight font-bold placeholder:font-bold dark:bg-thirdElevationDark w-full rounded-xl p-3 text-sm"
        />
        <input
          value={category}
          onChange={(e) => {
            setCategory(e);
          }}
          type="text"
          placeholder="CATEGORY"
          className="text-primaryDark dark:text-primaryLight bg-thirdElevationLight font-bold placeholder:font-bold dark:bg-thirdElevationDark w-full rounded-xl p-3 text-sm"
        />
        <textarea
          value={body}
          onChange={(e) => {
            setBody(e);
          }}
          type="text"
          placeholder="BODY"
          className="resize-none h-40 text-primaryDark dark:text-primaryLight bg-thirdElevationLight font-bold placeholder:font-bold dark:bg-thirdElevationDark w-full rounded-xl p-3 text-sm"
        />
      </div>
      <button
        onClick={onPostClickHandler}
        alt
        className="bg-accentLight dark:bg-accentLight text-white w-full mt-2 rounded-3xl p-2 font-bold"
      >
        POST
      </button>
    </>
  );
}
