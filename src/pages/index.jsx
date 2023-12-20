import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";

const Index = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(file);
      setImageUrl(url);
    }
  };

  return (
    <div className="bg-[#c9e8e4] w-full min-h-screen">
        <div className="bg-primary w-full overflow-hidden">
        <Navbar />
       </div>
     
      <div className="flex flex-col md:flex-row w-full z-20 justify-center md:justify-start items-center md:items-start gap-8 md:gap-20 p-4 md:p-20">
        <div className="bg-[white]/50 p-4 md:p-20 rounded-lg h-auto md:h-[90vh]">
          <div className="z-20 flex justify-center items-center flex-col">
            <img src="./Assests/scale-up.png" alt="" className="h-20" />
            <p className="z-20 text-black">Upscale Image</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src="./Assests/badge.png" alt="" className="h-20" />
            <p>Enhance AI</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src="./Assests/image-.png" alt="" className="h-20" />
            <p>Image Colorizer</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src="./Assests/magic-wand.png" alt="" className="h-20" />
            <p>Magic Eraser</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src="./Assests/red-eye.png" alt="" className="h-20" />
            <p>BG Remove</p>
          </div>

          {/* <div className="flex justify-center items-center flex-col">
            <img src="./Assests/remove-user.png" alt="" className="h-20" />
            <p>name</p>
          </div> */}

          {/* <h1 className="text-white text-4xl font-bold">Welcome to</h1>
            <h1 className="text-white text-4xl font-bold">The World of</h1> */}
      </div>
        <div className="z-20 flex justify-center items-center w-full">
          <div className="flex gap-4 md:gap-8 justify-center items-center flex-col bg-white/80 shadow-md rounded-lg w-full max-w-[800px] min-h-[400px] p-6">
            <p className="text-center text-sm md:text-base">Drag or upload your image</p>
            <form className="bg-[#2e2e2e] text-white flex p-4 justify-center items-center gap-4 rounded hover:opacity-80 cursor-pointer">
              <input
                type="file"
                accept="image/png, image/webp, image/jpeg"
                className="text-xs md:text-sm text-grey-500
                  file:mr-4 file:py-1 file:px-4 md:file:mr-5 md:file:py-2 md:file:px-6
                  file:rounded-full file:border-0
                  file:text-xs md:file:text-sm file:font-medium
                  file:bg-blue-50 file:text-black
                  hover:file:cursor-pointer hover:file:bg-amber-50
                  hover:file:text-amber-700"
                onChange={handleImageChange}
              />
            </form>
            {imageUrl && (
              <div className="mt-4">
                <img src={imageUrl} alt="Uploaded" className="max-w-full h-auto" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;