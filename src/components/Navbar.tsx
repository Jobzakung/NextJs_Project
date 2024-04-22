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
        <div className="flex justify-between items-center w-full h-[130px] gap-11">
            <div className="w-[75px] h-[60px] relative left-[42px]">
                <Link href='/' className="">
                    <Image
                        src="/image/Logo.svg"
                        alt="logo"
                        width={75}
                        height={60}
                        className='object-contain'
                    />
                </Link>
            </div>
            <div className="flex text-[32px] relative gap-20 right-[92px]">
                <Link href='/' className=" ">หน้าหลัก</Link>
                <Link href='/selectPage/' className="">เลือกวิดีโอ</Link>
                <Link href='https://shorturl.at/gnGS5' className="">แบบประเมิน</Link>
            </div>
        </div>

    )
}
export default Navbar