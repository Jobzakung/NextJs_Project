"use client";

import React from "react";

const Footer = () => (


    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 relative top-[100%] md-phone:top-[43%] lg-phone:top-[50%] md:top-[57%] lg:top-[53%] xl:top-[53%] 2xl:top-[55%] 3xl:top-[60%]">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="flex justify-center items-center text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023
                <a href="#"
                    className="hover:underline"> R & L™</a>  All Rights Reserved.
            </span>
            <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
    </footer>

);

export default Footer;
