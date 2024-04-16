"use client";

import Link from 'next/link'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="flex items-center w-full h-[80px]">
            <div className=" relative left-5 cursor-pointer m-3 rounded-[5%]">
                <FaBars className="text-3xl text-zinc-800  right-[20px]" onClick={toggleDropdown} />
                {isOpen && (
                    <div className="absolute top-[40px] z-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                        <div className="py-1" role="none">
                            <Link href="/selectPage" className="text-gray-700 block px-4 py-2 text-xl" role="menuitem" id="menu-item-0">เลือกวิดีโอ</Link>
                            <Link href="https://shorturl.at/gnGS5" className="text-gray-700 block px-4 py-2 text-xl" role="menuitem" id="menu-item-0">แบบประเมินเกี่ยวกับความรู้</Link>
                        </div>
                    </div>
                )}
            </div>
            <div className="w-[75px] h-[60px] relative left-10">
                <Link href='/' className="">
                    <Image
                        src="/image/Logo.svg"
                        alt="logo"
                        width={110}
                        height={110}
                        className='object-contain '
                    />
                </Link>
            </div>
            <div className="w-[75px] h-[60px] relative left-16">
                <Link href='/' className="">
                    <Image
                        src="/image/kmutnb.svg"
                        alt="logo"
                        width={110}
                        height={110}
                        className='object-contain '
                    />
                </Link>
            </div>

        </div>
    )
}
export default Navbar