"use client";

import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => (
    <header className="flex w-[1920px] h-[80px] p-[12px] pr-[1834px] pb-[11px] pl-[13px]">
            <nav className="">
                <Link href='/' className="">
                    <Image
                        src="/image/Logo.svg"
                        alt="logo"
                        width={110}
                        height={110}
                        className='object-contain'
                    />
                </Link>
            </nav>
    </header>

)

export default Navbar