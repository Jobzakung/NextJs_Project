"use client";

import Image from "next/image";
import React from "react";
import { Navbar } from ".";

const WelcomePage = () => {
  <Navbar />;
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-[150px] mb-[50px]">
        <p className="text-blue-700 font-kanit text-4xl font-semibold">
          แบบทดสอบความรู้
        </p>
      </div>
      <div className="flex justify-center">
        <video width="1280" height="720" controls poster="/PosterVideo.png">
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
