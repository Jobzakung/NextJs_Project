"use client";
import React, { useState } from "react";
import Navbar from "../Navbar";
import './style.css'
import { Footer } from "..";

const home = () => {
    const [degrees, setDegrees] = useState(0);


    const handleRotationNext = (angle: number) => {
        // Check if rotation is allowed
        if ((degrees === 0 && angle < -35) || (degrees === -35 * (videos.length - 1) && angle > -105) || (degrees + angle < -105)) {
            return;
        }
        setDegrees((prevDegrees) => prevDegrees + angle);


    };
    const handleRotationPrev = (angle: number) => {
        // Check if rotation is allowed
        if ((degrees === 0 && angle < -35) || (degrees === -35 * (videos.length - 1) && angle < 35) || (degrees + angle > 35)) {
            return;
        }
        setDegrees((prevDegrees) => prevDegrees + angle);
    };


    const videos = [
        { id: 0, src: "/video/Vi1.mp4", poster: "/image/PosterVideo.png", title: "1" },
        { id: 1, src: "/video/Vi1.mp4", poster: "/image/PosterVideo.png", title: "2" },
        { id: 2, src: "/video/testing.mp4", poster: "/image/PosterVideo.png", title: "3" },
        { id: 3, src: "/video/testing.mp4", poster: "/image/PosterVideo.png", title: "4" },
        { id: 4, src: "/video/Vi1.mp4", poster: "/image/PosterVideo.png", title: "5" },


    ];
    return (
        <div className="  w-screen h-screen">
            <Navbar />
            <div className="flex justify-center items-center relative top-[100px] md-phone:top-[150px] md:top-[150px] md:right-[10px] xl:top-[200px] xl:right-[50px] 2xl:top-[200px] 2xl:right-[125px]">
                <div
                    className="flex justify-center items-center relative w-[150px] h-200px duration-1000 transform-style-3d"
                    style={{ transform: `perspective(1000px) rotateY(${degrees}deg)` } as React.CSSProperties}
                //perspective คือ ระยะห่างของการเลี้ยว
                >
                    {videos.map((video) => (
                        <div
                            className="absolute justify-center items-center top-0 left-0 h-full w-full md-phone:w-[135px] md:w-[185px] xl:w-[250px] 2xl:w-[320px] origin-center transform-style-3d overflow-hidden gap-30px video-container"
                            key={video.id}
                            style={{
                                '--i': video.id - 1,
                                // marginLeft: `calc(var(--i) * 20px)` // คือการเพิ่มระยะห่างของวิดีโอ
                            } as React.CSSProperties}
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
                            {/* <p className="absolute bottom-2 left-0 w-full text-center text-white">{video.title}</p> */}

                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center relative items-center min-h-10v top-[210px] md-phone:top-[300px] md:top-[400px] 2xl:top-[500px] gap-30px">
                <div
                    className="relative w-60px h-60px border-[2px] border-solid border-white rounded-full flex justify-center items-center cursor-pointer active:bg-white before::content-none before::absolute before:w-[15px] before:h-[15px] before:top-[15px] before:right-[15px]  before:border-t-[3px] before:border-solid before:border-black before:border-r-[3px]  before:rotate-225"
                    style={{ transform: `translate(-2.5px, 2.5px)` } as React.CSSProperties}
                    onClick={() => { handleRotationPrev(35); console.log("Prev Degrees: ", degrees); }}
                >
                </div>
                <div
                    className="relative w-[60px] h-[60px] border-[2px] border-solid border-white rounded-full flex justify-center items-center cursor-pointer active:bg-white before::content-none before::absolute before:w-[15px] before:h-[15px] before:top-[15px] before:right-[15px] before:border-t-[3px] before:border-solid before:border-black before:border-r-[3px] before:rotate-45"
                    style={{ transform: `translate(-2.5px, 2.5px)` } as React.CSSProperties}
                    onClick={() => { handleRotationNext(-35); console.log("Next Degrees: ", degrees); }}

                >
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default home;


