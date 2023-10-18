"use client";

import Image from "next/image";
import React from "react";
import { Navbar } from ".";

const WelcomePage = () => {
  <Navbar />;
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-[150px] mb-[50px] 2xl:mt-[40px] lg:mt-[25px] md:mt-[10px] sm:mt-[10px] 2xl:mb-[40px] lg:mb-[30px] md:mb-[10px] sm:mb-[10px]">
        <p className="text-blue-700 font-kanit text-4xl font-semibold">
          แบบทดสอบความรู้
        </p>
      </div>
      <div className="flex justify-center items-center m-auto">
        <video className="w-[1280px]" controls poster="/PosterVideo.png">
          <source
            src="/video/Vi1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>


      </div>
    </div>
  )
};

export default WelcomePage;
