import React from "react";

const RightAside = () => {
  return (
    <div className="lg:w-1/2 font-[600] flex flex-col lg:pr-28 justify-center px-8">
      <button className="bg-[#6054a4] text-white px-16 lg:px-0 py-5 rounded-lg my-8 shadow-lg shadow-gray-900/50 focus:scale-105 hover:scale-105 duration-300 outline-none">
        Try it free 7 days{" "}
        <span className="font-[400] text-gray-300">
          then $20/mo. thereafter
        </span>
      </button>
      <form
        action=""
        className="bg-white flex flex-col p-6 mb-12 lg:mb-0 lg:p-10 rounded-xl shadow-lg shadow-gray-900/50"
      >
        <input
          type="text"
          placeholder="First Name"
          className="w-full px-8 py-4 placeholder:text-gray-500 border border-gray-300 rounded-md mb-4 focus:scale-105 duration-300 outline-none"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full px-8 py-4 placeholder:text-gray-500 border border-gray-300 rounded-md mb-4 focus:scale-105 duration-300 outline-none"
        />
        <input
          type="text"
          placeholder="Email Address"
          className="w-full px-8 py-4 placeholder:text-gray-500 border border-gray-300 rounded-md mb-4 focus:scale-105 duration-300 outline-none"
        />
        <input
          type="text"
          placeholder="Password"
          className="w-full px-8 py-4 placeholder:text-gray-500 border border-gray-300 rounded-md mb-4 focus:scale-105 duration-300 outline-none"
        />
        <button className="p-4 text-white bg-[#38cc8c] rounded-lg hover:scale-105 focus:scale-105 duration-300 outline-none">
          CLAIM YOUR FREE TRIAL
        </button>
        <p className="self-center text-xs mt-6 text-gray-300">
          By clicking the button, you are agreeing to our{" "}
          <span className="text-[#ff8a46] cursor-pointer">
            Terms and Services
          </span>
        </p>
      </form>
    </div>
  );
};

export default RightAside;
