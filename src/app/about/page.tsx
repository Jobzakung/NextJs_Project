"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Page() {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            // ให้เปลี่ยนไปหน้าใหม่ที่ต้องการ
            window.location.href = '/home';
        }, 4000);
    };

    return (
        <div>
            {/* ใช้ Link เพื่อเปลี่ยนไปหน้าใหม่ */}
            <Link href="/home">
                <div className="" onClick={handleClick}>
                    <div className="">
                        {loading ? 'Loading...' : 'Get Started'}
                    </div>
                </div>
            </Link>
        </div>
    );
}
