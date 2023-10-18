"use client";

import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => (
    <header className="bg-blue-900">
        <nav className="max-w-[1440px]">
            <Link href='/' className="flex justify-start">
                <Image
                    src="logo.svg"
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