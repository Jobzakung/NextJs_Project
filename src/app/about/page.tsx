"use client";
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VideoComponent from '../../components/Video';
import data from '../../data.json';
import { Navbar } from '@/components';

const MainComponent: React.FC = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [sliderRef, setSliderRef] = useState(null);


    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(prevIndex => (prevIndex + 1) % data.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const settings = {
        dots: false,
        arrows: false,
        className: 'left-[15%]',
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: slideIndex,
        beforeChange: (oldIndex: number, newIndex: number) => setSlideIndex(newIndex)
    };

    return (
        <main className='bg-beige_bg overflow-x-hidden overflow-y-hidden'>
            <div className=' w-screen h-screen'>
                <Navbar />
                <div className="">
                    <Slider  {...settings} >
                        {data.map((video, index) => (
                            <div key={index}>
                                //TODO: Fix the type of setShowButtons
                                <VideoComponent src={video.src} poster={video.poster} questions={video.questions} setShowButtons={function (value: React.SetStateAction<boolean>): void {
                                    throw new Error('Function not implemented.');
                                } } />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </main>
    );
};

export default MainComponent;
