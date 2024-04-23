"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";


const Footer = () => (
<div className="flex justify-center items-center flex-col lg:flex-row relative gap-6 top-[5%]">
    <div className="w-full contents lg:w-auto lg:mr-12 lg:relative lg:top-0">
        <Link href="https://www.fitm.kmutnb.ac.th/">
        <Image
            src="/image/FITM_LOGO.svg"
            alt="FITM logo"
            
            width={200}
            height={120}
            className="w-[200px] h-[117px] lg:w-[200px] lg:h-[117px] object-cover cursor-pointer"
        /></Link>
    </div>
    <div className="w-full lg:w-auto relative lg:top-[40px]">
        <p className="text-center lg:text-left text-lg lg:text-2xl text-black">
            © 2024 Multimedia Rabies and Leptospieosis™. All Rights Reserved.
        </p>
    </div>
</div >
);

export default Footer;

// <div className="flex justify-center items-center flex-col lg:flex-row relative">
//     <div className="w-full lg:w-auto lg:mr-12 lg:relative lg:top-0">
//         <Image
//             src="/image/FITM_LOGO.svg"
//             alt="FITM logo"
//             width={200}
//             height={120}
//             className="w-[200px] h-[117px] lg:w-[200px] lg:h-[117px] object-cover"
//         />
//     </div>
//     <div className="w-full lg:w-auto">
//         <p className="text-center lg:text-left text-lg lg:text-xl text-black">
//             © 2024 Multimedia Rabies and Leptospieosis™. All Rights Reserved.
//         </p>
//     </div>
// </div>
