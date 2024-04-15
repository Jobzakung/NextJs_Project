import React from 'react';
import Error404 from '@/components/404error';
import { Navbar } from '@/components';
import Video1 from './video1';
import Video2 from './video.2';


export default function Page({ params }: { params: { selectId: string } }) {
    let videos;

    switch (params.selectId) {
        case '1':
            videos = <Video1 />;
            break;
        case '2':
            videos = <Video2 />;
            break;
        default:
            videos = <Error404 />;
            break;
    }

    return (
        <main className=' bg-beige_bg w-screen h-screen overflow-y-hidden overflow-x-hidden'>
            {['1', '2'].includes(params.selectId) && <Navbar />}
            {videos}
        </main>

    );
}

export function generateStaticParams() {
    return [
        { selectId: '1' },
        { selectId: '2' },
    ];
}
