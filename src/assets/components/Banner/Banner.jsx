import React from "react";
import img from "../../../assets/image/books.jpg";

const Banner = () => {
  return (
    <div className="bg-gray-100 py-10 px-5  rounded-2xl mb-10">
      <div className="flex justify-center items-center gap-10 my-20">
        <div className="w-7/10 mx-auto text-center my-20">
          <h1 className="text-5xl text-black font-bold text-center mb-8">
            Every page tells a new story, every book opens a new world.
          </h1>

          <button className="btn btn-primary"> View The List</button>
        </div>
        <div className="w-3/10">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
