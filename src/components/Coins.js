import React from "react";
import Input from "./Input";

const Coins = ({ coins }) => {
  return (
    <section>
      <div className="flex">
        <div className="max-w-xs">
          <Input />
          <div className="flex bg-white shadow-md p-1 rounded-md shadow-md flex-wrap">
            {coins.map((coin, i) => (
              <span
                key={i}
                className="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"
              >
                {coin}
              </span>
            ))}
          </div>
          <div className="text-sm text-red-600">Такой тикер уже добавлен</div>
        </div>
      </div>
      <button
        type="button"
        className="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <svg
          className="-ml-0.5 mr-2 h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="#ffffff"
        >
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
        </svg>
        Добавить
      </button>
    </section>
  );
};

export default Coins;
