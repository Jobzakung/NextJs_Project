"use client";
import React, { useState } from "react";

const home = () => {
    const [degrees, setDegrees] = useState(0);

    const handleRotation = (angle: number) => {
        setDegrees((prevDegrees) => prevDegrees + angle);
    };
    const videos = [
        { id: 0, src: "/video/Vi1.mp4", poster: "/PosterVideo.png" },
        // { id: 1, src: "/video/Vi1.mp4", poster: "/PosterVideo.png" },
        { id: 2, src: "/video/testing.mp4", poster: "/PosterVideo.png" },// can't play video
        // { id: 3, src: "/video/testing.mp4", poster: "/PosterVideo.png" },
        // { id: 4, src: "/video/Vi1.mp4", poster: "/PosterVideo.png" },
        // { id: 5, src: "/video/Vi1.mp4", poster: "/PosterVideo.png" },
        { id: 6, src: "/video/Vi1.mp4", poster: "/PosterVideo.png" },// can't play video
        // { id: 7, src: "/video/Vi1.mp4", poster: "/PosterVideo.png" },

    ];
    return (
        <div>
            <div className="flex flex-auto justify-center items-center min-h-screen min-w-screen relative bg-cover transform-style-3d object-cover p-0 m-0 box-border"
            >                
            <div
                className="relative w-200px h-200px duration-1000 transform-style-3d"
                style={{ transform: `perspective(1000px) rotateY(${degrees}deg)` } as React.CSSProperties} 
            >
                    {videos.map((video) => (
                        <div
                            className="absolute top-0 left-0 h-full w-165per origin-center transform-style-3d overflow-hidden"
                            key={video.id}
                            style={{
                                '--i':video.id,
                                transform: `rotateY(calc(var(--i)* 45deg)) translateZ(450px)`,
                                WebkitBoxReflect:`below 0px linear-gradient(transparent, #0004)`,
                            } as any}
                        >
                            <video
                                className="absolute top-0 left-0 w-full h-full object-cover select-none rounded-lg transform-style-3d"
                                controls preload="none"
                                poster={video.poster}
                                onClick={() => console.log(`This video id: ${video.id}`)}
                                onError={(e) => console.error(`Error loading video ${video.src}`, e)}
                            >
                                <source src={video.src} type="video/mp4" />
                                Your browser does not support the video tag.

                            </video>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center absolute items-center min-h-10v bottom-[100px] gap-30px">
                    <div
                        className="relative w-60px h-60px border-[2px] border-solid border-white rounded-full flex justify-center items-center cursor-pointer active:bg-white before::content-none before::absolute before:w-[15px] before:h-[15px] before:top-[15px] before:right-[15px]  before:border-t-[3px] before:border-solid before:border-r-[3px] before::border-white before:rotate-225"
                        style={{ transform: `translate(-2.5px, 2.5px)` } as React.CSSProperties}
                        onClick={() => handleRotation(45)}
                    >
                    </div>
                    <div
                        className="relative w-[60px] h-[60px] border-[2px] border-solid border-white rounded-full flex justify-center items-center cursor-pointer active:bg-white before::content-none before::absolute before:w-[15px] before:h-[15px] before:top-[15px] before:right-[15px] before:border-t-[3px] before:border-solid before:border-r-[3px] before::border-white before:rotate-45"
                        style={{ transform: `translate(-2.5px, 2.5px)` } as React.CSSProperties}
                        onClick={() => handleRotation(-45)}
                    >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default home;
