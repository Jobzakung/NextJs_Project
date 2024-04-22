"use client";

import React from "react";
import Image from "next/image";


const Footer = () => (

    <footer>
        <div className="flex justify-center items-center relative top-full">
            <div className="w-[832px] h-[43px] absolute left-[644px] top-[89px] overflow-hidden">
                <p className="absolute left-[31px] top-[7px] text-2xl text-center text-black">
                    © 2024 Multimedia Rabies and Leptospieosis™. All Rights Reserved.
                </p>
            </div>
            <Image
                src="/image/FITM_LOGO.svg"
                alt="FITM logo"
                width={200}
                height={120}
                className="w-[200px] h-[117px] absolute left-[443.5px] top-[22.5px] object-cover"
            />
        </div>
    </footer>

);

export default Footer;
