"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import './style.css'
import { Footer } from "..";
import videoData from "../../data.json";
import VideoComponent from "../Video";
interface Video {
    id: number;
    src: string;
    poster: string;
    title: string;
}

const Home = () => {
    const [degrees, setDegrees] = useState(0);
    // const [videos, setVideos] = useState<Video[]>([]); // Provide type annotation for videos
    const [videos, setVideos] = useState(videoData);

    // useEffect(() => {
    //     // Fetch video data from video.json
    //     fetch('../../video.json')
    //         .then(response => response.json())
    //         .then((data: Video[]) => setVideos(data)) // Ensure data matches the Video interface
    //         .catch(error => console.error('Error fetching video data:', error));
    // }, []);

    const handleRotationNext = (angle: number) => {
        // Check if rotation is allowed
        if ((degrees === 0 && angle < -35) || (degrees === -35 * (videos.length - 1) && angle > -105) || (degrees + angle < -105)) {
            return;
        }
        setDegrees(prevDegrees => prevDegrees + angle);
    };

    const handleRotationPrev = (angle: number) => {
        // Check if rotation is allowed
        if ((degrees === 0 && angle < -35) || (degrees === -35 * (videos.length - 1) && angle < 35) || (degrees + angle > 35)) {
            return;
        }
        setDegrees(prevDegrees => prevDegrees + angle);
    };

    return (
        <div className="w-screen h-screen">
            <Navbar />
            <div className="flex justify-center items-center relative top-[100px] md-phone:top-[150px] md:top-[150px] md:right-[10px] xl:top-[200px] xl:right-[50px] 2xl:top-[200px] 2xl:right-[125px]">
                <div
                    className="flex justify-center items-center relative w-[150px] h-200px duration-1000 transform-style-3d"
                    style={{ transform: `perspective(1000px) rotateY(${degrees}deg)` }}
                >
                    {videoData.map((video, index) => (
                        <div
                            className="absolute justify-center items-center top-0 left-0 h-full w-full md-phone:w-[135px] md:w-[185px] xl:w-[250px] 2xl:w-[320px] origin-center transform-style-3d overflow-hidden gap-30px video-container"
                            key={index}
                            style={{ '--i': index } as React.CSSProperties}
                        >
                            <VideoComponent key={index} src={video.src} />

                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center relative items-center min-h-10v top-[210px] md-phone:top-[300px] md:top-[400px] 3xl:top-[450px] gap-30px">
                <div
                    className="relative w-60px h-60px border-[2px] border-solid border-white rounded-full flex justify-center items-center cursor-pointer active:bg-white before::content-none before::absolute before:w-[15px] before:h-[15px] before:top-[15px] before:right-[15px] before:border-t-[3px] before:border-solid before:border-black before:border-r-[3px] before:rotate-225"
                    style={{ transform: `translate(-2.5px, 2.5px)` }}
                    onClick={() => { handleRotationPrev(35); console.log("Prev Degrees: ", degrees); }}
                >
                </div>
                <div
                    className="relative w-[60px] h-[60px] border-[2px] border-solid border-white rounded-full flex justify-center items-center cursor-pointer active:bg-white before::content-none before::absolute before:w-[15px] before:h-[15px] before:top-[15px] before:right-[15px] before:border-t-[3px] before:border-solid before:border-black before:border-r-[3px] before:rotate-45"
                    style={{ transform: `translate(-2.5px, 2.5px)` }}
                    onClick={() => { handleRotationNext(-35); console.log("Next Degrees: ", degrees); }}
                >
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
