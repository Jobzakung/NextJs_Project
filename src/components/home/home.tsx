"use client";
import React, { useState } from "react";

const home = () => {
    const [degrees, setDegrees] = useState(0);


    // const handleRotation = (angle: number) => {
    //     setDegrees((prevDegrees) => prevDegrees + angle);

    // };
    const handleRotationNext = (angle: number) => {
        // Check if rotation is allowed
        if ((degrees === 0 && angle < -35) || (degrees === -35 * (videos.length - 1) && angle > -105) || (degrees + angle < -105)) { 
            return;
        }
        setDegrees((prevDegrees) => prevDegrees + angle);
        // console.log("Degrees: ",degrees)
        // console.log("Angle: ",angle)

    };
    const handleRotationPrev = (angle: number) => {
        // Check if rotation is allowed
        if ((degrees === 0 && angle < -35) || (degrees === -35 * (videos.length - 1) && angle < 35) || (degrees + angle > 35)) { 
            return;
        }
        setDegrees((prevDegrees) => prevDegrees + angle);
        // console.log("Degrees: ",degrees)
        // console.log("Angle: ",angle)

    };


    const videos = [
        { id: 0, src: "/video/Vi1.mp4", poster: "/image/PosterVideo.png" },
        { id: 1, src: "/video/Vi1.mp4", poster: "/image/PosterVideo.png" },
        { id: 2, src: "/video/testing.mp4", poster: "/image/PosterVideo.png" },// can't play video
        { id: 3, src: "/video/testing.mp4", poster: "/image/PosterVideo.png" },
        { id: 4, src: "/video/Vi1.mp4", poster: "/image/PosterVideo.png" },
        // { id: 5, src: "/video/Vi1.mp4", poster: "/image/PosterVideo.png" },
        // { id: 6, src: "/video/Vi1.mp4", poster: "/image/PosterVideo.png" },// can't play video
        // { id: 7, src: "/video/Vi1.mp4", poster: "/image/PosterVideo.png" },
        // { id: 8, src: "/video/Vi1.mp4", poster: "/image/PosterVideo.png" },
        // { id: 9, src: "/video/Vi1.mp4", poster: "/image/PosterVideo.png" },
        // { id: 10, src: "/video/Vi1.mp4", poster: "/image/PosterVideo.png" },

    ];
    return (
            <div className="flex justify-center items-center min-h-screen relative bg-cover">                
            <div
                className="relative w-[150px] h-200px duration-1000 transform-style-3d"
                style={{ transform: `perspective(1000px) rotateY(${degrees}deg)` } as React.CSSProperties} 
                >
                    {videos.map((video) => (
                        <div
                            className="absolute top-0 left-0 h-full w-165per origin-center transform-style-3d overflow-hidden gap-30px"
                            key={video.id}
                            style={{
                                '--i':video.id -1,
                                transform: `rotateY(calc(var(--i)* 35deg)) translateZ(500px)`,
                                zIndex: videos.length - video.id,
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
                        onClick={() => { handleRotationPrev(35); console.log("Prev Degrees: ", degrees); }}
                    >
                    </div>
                    <div
                        className="relative w-[60px] h-[60px] border-[2px] border-solid border-white rounded-full flex justify-center items-center cursor-pointer active:bg-white before::content-none before::absolute before:w-[15px] before:h-[15px] before:top-[15px] before:right-[15px] before:border-t-[3px] before:border-solid before:border-r-[3px] before::border-white before:rotate-45"
                        style={{ transform: `translate(-2.5px, 2.5px)` } as React.CSSProperties}
                        onClick={() => { handleRotationNext(-35); console.log("Next Degrees: ", degrees); }}
                        
                    >
                    </div>
                </div>
            </div>
    );
};

export default home;


