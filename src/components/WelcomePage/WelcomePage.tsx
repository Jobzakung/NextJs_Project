"use client";

import React, { useState } from "react";
import { Footer, Navbar } from "..";
import Link from "next/link";
import Image from "next/image";

const WelcomePage = () => {
  const [loading, setShowUI] = useState(false);
  const toggleUI = () => {
    setShowUI(!loading);
  };
  const OtherComponent = React.lazy(() => import("../home/home"));

  return (
    <div className="absolute justify-center w-screen h-screen overflow-x-hidden">
      <Navbar />
      <div className=" bg-neutral-200 w-screen h-[770px] overflow-x-hidden relative overflow-y-hidden">
        <Image
          src="/image/Mad_dog-removebg.svg"
          width={1144}
          height={770}
          alt="Mad dog"
          className=" absolute object-cover"
        />
        <Image
          src="/image/purepng.png"
          alt="Rat"
          width={503}
          height={470}
          className=" absolute left-[1417px] top-[300px] object-contain"
        />
        <div className="absolute left-[60%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <p className="text-[48px] ">Multimedia Rabies and Leptospirosis</p>
          <p className="text-[40px] ">
            สื่อมัลติมีเดีย​ โรคพิษสุนัข​บ้า​และโรคฉี่หนู
          </p>
          <button className="  relative top-[32px] text-[24px] rounded-[50px] w-[190px] h-[65px] bg-blue-300 hover:bg-blue-400">
            <Link href="/selectPage" className=" ">
              เริ่มต้น
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WelcomePage;
