import React from "react";
import Navbar1 from "../navbar1/Navbar1";
function Add() {
  return (
    <div className="flex-col bg-[#ECECEC] overflow-hidden min-h-screen">
      <Navbar1 />
      <div className="flex flex-col h-full items-center">
        <div className="text-6xl font-bold tracking-tight mr-24 mt-16 text-center">
          Add Your Car.
        </div>
        <div className="flex mt-8 text-xl">
          <div className="flex flex-col  space-y-12 ">
            <div className="flex gap-8 ">
              <div>Car Name</div>
              <input
                type="text"
                className="bg-[#f4f4f4] rounded-md p-1 mix-blend-normal shadow-lg"
              />
            </div>
            <div className="flex gap-8">
              <div>Car Model</div>
              <input
                type="text"
                className="bg-[#f4f4f4] rounded-md p-1 shadow-lg"
              />
            </div>
            <div className="flex gap-8">
              <div>Car Price</div>
              <input
                type="text"
                className="bg-[#f4f4f4] rounded-md p-1 shadow-lg"
              />
            </div>
            <div className="flex gap-8">
              <div>Car Description</div>
              <input
                type="text"
                className="bg-[#f4f4f4] rounded-md p-1 shadow-lg"
              />
            </div>
          </div>
          <div className="flex m-4 gap-4 ml-32">
            <div>Image</div>
            <input
              type="text"
              className="bg-[#f4f4f4] rounded-md p-1 shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-16 bg-[#F4F4F4] rounded-md p-2 shadow-lg hover:bg-black cursor-pointer text-">
          <div className="text-xl font-bold">Add Car</div>
        </div>
      </div>
    </div>
  );
}

export default Add;
