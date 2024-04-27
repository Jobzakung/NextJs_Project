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
      <div className=" bg-background w-screen h-[440px] sm:h-[770px] lg:h-[60%] xl:h-[75%] overflow-x-hidden relative overflow-y-hidden bg-cover">
        <Image
          src="/image/Mad_dog-removebg.svg"
          width={0}
          height={0}
          alt="Mad dog"
          className=" sm-phone:w-[254px] sm-phone:h-[310px] sm-phone:top-[30%] lg:w-[50%] lg:h-[465px] lg:top-[0%] xl:w-[810px] xl:h-[100%]   3xl:w-[1144px] 3xl:h-[100%] absolute object-cover"
        />
        <Image
          src="/image/purepngNew.svg"
          alt="Rat"
          width={0}
          height={0}
          className="sm-phone:w-[234px] sm-phone:h-[250px] sm-phone:top-[57%] sm-phone:left-[50%] lg:w-[400px] lg:h-[450px] lg:left-[70%] lg:top-[25%] xl:w-[390px] xl:h-[400px] xl:left-[75%] xl:top-[42%] 3xl:w-[503px] 3xl:h-[500px] absolute 3xl:left-[77%] 3xl:top-[45%] object-cover"
        />
        <div className="absolute sm-phone:left-[50%] lg:left-[55%]  3xl:left-[60%] top-1/4 md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <p className="2xl:text-[48px] text-[22px]">
            Multimedia Rabies and Leptospirosis
          </p>
          <p className="2xl:text-[40px] text-[18px]">
            สื่อมัลติมีเดีย​ โรคพิษสุนัข​บ้า​และโรคฉี่หนู
          </p>
          <button className="  relative top-[32px] text-[18px] md:text-[24px] rounded-[50px] w-[100px] h-[50px] lg:w-[190px] lg:h-[65px] bg-blue-300 hover:bg-blue-400">
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
