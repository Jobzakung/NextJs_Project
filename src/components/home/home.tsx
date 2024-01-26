"use client";
import React, { useState } from "react";
import "./style.css";
import { Navbar } from "..";

const home = () => {
    const [degrees, setDegrees] = useState(0);

    const handleRotation = (angle: number) => {
        setDegrees((prevDegrees) => prevDegrees + angle);
    };
    const videos = [
        { id: 1, src: "/video/Vi1.mp4" },
        { id: 2, src: "/video/Vi1.mp4" },
        { id: 3, src: "/video/Vi1.mp4" },
        // Add more videos as needed
    ];
    return (
        <div>
            {/* <Navbar /> */}
            <div className="flex justify-center items-center min-h-screen relative bg-cover container-transform3D transform-style-3d">
                <div
                    className="relative w-[200px] h-[200px] duration-1000 transform-style-3d"
                    style={{ transform: `perspective(1000px) rotateY(${degrees}deg)` }}
                >
                    {videos.map((video) => (
                        <span
                            className="absolute top-0 left-0 h-full w-165per origin-center transform-style-3d video-wrapper" //transfrom3D-box-span
                            key={video.id}
                            style={{ "--i": video.id - 1 } as any}
                        >
                            <video
                                className="absolute top-0 left-0 w-full h-full object-cover select-none rounded-lg"
                                controls
                                poster="/PosterVideo.png"
                                onError={(e) => console.error("Error loading video", e)}
                            >
                                <source src={video.src} type="video/mp4" />
                            </video>
                        </span>
                    ))}
                </div>

                <div className="flex justify-center absolute items-center min-h-10v bottom-[100px] gap-[30px]">
                    <button
                        className="relative w-[60px] h-[60px] border-[2px] border-solid border-white rounded-full flex justify-center items-center cursor-pointer active:bg-white before::content-none before::absolute before:w-[15px] before:h-[15px] before:top-[15px] before:right-[15px]  before:border-t-[3px] before:border-solid before:border-r-[3px] before::border-white before:rotate-225"
                        style={{ transform: `translate(-2.5px, 2.5px)` }}
                        onClick={() => handleRotation(45)}
                    >
                        {/* Left arrow icon or text */}
                    </button>
                    <button
                        className="relative w-[60px] h-[60px] border-[2px] border-solid border-white rounded-full flex justify-center items-center cursor-pointer active:bg-white before::content-none before::absolute before:w-[15px] before:h-[15px] before:top-[15px] before:right-[15px] before:border-t-[3px] before:border-solid before:border-r-[3px] before::border-white before:rotate-45"
                        style={{ transform: `translate(-2.5px, 2.5px)` }}
                        onClick={() => handleRotation(-45)}
                    >
                        {/* Right arrow icon or text */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default home;
