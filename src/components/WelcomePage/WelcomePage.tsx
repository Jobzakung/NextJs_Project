"use client";

import Image from "next/image";
import React from "react";
import { Navbar } from "..";
import Link from "next/link";

const WelcomePage = () => {

  return (
    <div className="absolute justify-center bg-dog-bg bg-cover bg-no-repeat w-screen h-screen overflow-x-hidden">
      <Navbar />
      <div className="flex justify-center">
        <div className="flex justify-center w-[512px] h-[283px] flex-shrink-0">
          <div className="relative font-Arapey text-[220px] not-italic font-light"
          >R & L
            <div className="flex justify-center relative bottom-[70px] text-[36px] font-normal font-Alegreya-Sans-SC">Rabies And Leptospirosis </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center relative top-[35px]">
        <div className="flex justify-center items-center w-[184px] h-[61px] gap-[10px] flex-shrink-0 rounded-[50px] bg-blue-300">
          <Link href='/home' className="">
            <div className="">Get Started
            </div>
          </Link>
        </div>
      </div>
    </div>


  )
};

export default WelcomePage;

