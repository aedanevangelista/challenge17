import React from "react";

const LeftAside = () => {
  return (
    <div className=" lg:w-1/2 flex flex-col h-full text-white p-4 lg:pl-24 lg:pr-32 border-teal-200 justify-center">
      <h1 className="font-[700] text-5xl lg:pr-10 mb-8 lg:mb-0 lg:py-8 text-center lg:text-start">
        Learn to code by watching others
      </h1>
      <p className="font-[400] text-center lg:text-start">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.{" "}
      </p>
    </div>
  );
};

export default LeftAside;
