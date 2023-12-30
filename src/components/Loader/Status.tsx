import React from "react";

import "./style.css";

interface Props {}

export const StatusExchangeLoader: React.FC<Props> = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center mx-auto my-4 overflow-hidden">
      <div className="flex justify-center items-center relative w-40 h-40">
        <div className="absolute border-[0.75em] border-t-transparent rounded-full border-solid border-cyan-500 h-full w-full animate-spin"></div>
      </div>
      <h1 className="flex text-white text-xl lg:text-2xl 2xl:text-3xl font-semibold mt-4">
        Searching
        <div className="loading-pulse">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </h1>
    </div>
  );
};
