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
        <div className="flex justify-between items-center w-full h-[80px]">
            <div className="w-[75px] h-[60px]">
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
            <div className=" relative right-[20px] cursor-pointer">
                <FaBars className="text-3xl text-zinc-800  right-[20px]" onClick={toggleDropdown} />
                {isOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                        <div className="py-1" role="none">
                            <Link href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0">Account settings</Link>
                            <Link href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">Support</Link>
                            <Link href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">License</Link>
                            <form method="POST" action="#" role="none">
                                <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" id="menu-item-3">Sign out</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Navbar