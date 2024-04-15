"use client";

import React, { Suspense, useState } from "react";
import { Navbar } from "..";
import Link from "next/link";

const WelcomePage = () => {

  const [loading, setShowUI] = useState(false);
  const toggleUI = () => {
    setShowUI(!loading);
  }
  const OtherComponent = React.lazy(() => import('../home/home'));

  return (
    <div className="absolute justify-center bg-dog-bg bg-cover bg-no-repeat w-screen h-screen overflow-x-hidden">
      <Navbar />
      <div className="flex justify-center">
        <div className="flex justify-center items-center w-[400px] h-[120px] md-phone:h-[240px] md:h-[300px] xl:h-[250px] 2xl:w-[512px] 2xl:h-[283px] flex-shrink-0">
          <div className="relative font-Arapey text-[100px] md-phone:text-[150px] not-italic font-light 2xl:text-[220px]"
          >R & L
            <div className="flex justify-center relative bottom-[30px] 2xl:bottom-[70px] text-[20px] md-phone:text-[30px] md-phone:bottom-[55px] 2xl:text-[36px] font-normal font-Alegreya-Sans-SC">Rabies And Leptospirosis </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center relative top-[35px] md:top-[15px] xl:top-[5px]">
        <div className="flex justify-center items-center w-[120px] h-[45px] md-phone:w-[150px] 2xl:w-[184px] 2xl:h-[61px] 2xl:gap-[10px] flex-shrink-0 rounded-[50px] cursor-pointer text-gray-800 bg-blue-300 hover:bg-blue-400 ">
          <Link href='/selectPage' onClick={toggleUI}>
            <div>
              <Suspense fallback={<div>Loading . . .</div>}>
                {loading ? <OtherComponent /> : 'Get Started'}
              </Suspense>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default WelcomePage;

