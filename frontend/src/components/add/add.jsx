import React from "react";
import Navbar1 from "../navbar1/Navbar1";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";

function Add() {
  const [file, setFile] = useState(null);
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const handleChange = (file) => {
    setFile(file);
  };
  const fileTypes = ["JPEG", "PNG", "GIF"];
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
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="bg-[#f4f4f4] rounded-md p-1 mix-blend-normal shadow-lg"
              />
            </div>
            <div className="flex gap-8">
              <div>Car Model</div>
              <input
                onChange={(e) => setModel(e.target.value)}
                type="text"
                className="bg-[#f4f4f4] rounded-md p-1 shadow-lg"
              />
            </div>
            <div className="flex gap-8">
              <div>Car Price</div>
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                className="bg-[#f4f4f4] rounded-md p-1 shadow-lg"
              />
            </div>
            <div className="flex gap-8">
              <div>Car Description</div>
              <input
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="bg-[#f4f4f4] rounded-md p-1 shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex m-4 gap-4 ml-32">
              <div>Image</div>

              <FileUploader
                color={"#000000"}
                multiple={false}
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              />
            </div>
            <p className="ml-32 mt-16 font-light text-xs">
              {file ? `File name: ${file.name} ` : "no files uploaded yet"}
            </p>
            <img
              src={file ? URL.createObjectURL(file) : ""}
              className="h-32 w-96 ml-32 mt-8"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-16 bg-[#F4F4F4] rounded-md p-2 shadow-lg hover:bg-black cursor-pointer hover:text-white">
          <div className="text-xl font-bold">Add Car</div>
        </div>
      </div>
    </div>
  );
}

export default Add;
