"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Footer } from "@/components";
import videoData from "@/data.json";
import VideoComponent from "@/components/Video";
import { Navbar } from "@/components";

const Video2 = () => {
    const [videos, setVideos] = useState(videoData);
    const [showButtons, setShowButtons] = useState<boolean>(true);
    const [slideIndex, setSlideIndex] = useState(0);

useEffect(() => {
    plusSlides(1)

},[])


    const plusSlides = (n: number) => {
        showSlides(slideIndex + n);
    };

    const currentSlide = (n: number) => {
        showSlides(n);
    };

    const showSlides = (n: number) => {
        let newIndex = n;
        const slidesLength = videoData.length;
        if (n >= slidesLength) {
            newIndex = 0;
        } else if (n < 0) {
            newIndex = slidesLength - 1;
        }
        setSlideIndex(newIndex);
    };

    const handleVideoPlay = () => {
        setShowButtons(false); // hide buttons
    };

    const handleNoQuestions = () => {
        setShowButtons(true); // show buttons
    };
    // console.log(showButtons + " setShowButtons")
    // console.log(slideIndex + " slideIndex");
    // console.log(showButtons + " setShowButtons");
    // console.log(slideIndex + " plusSlides");
    return (
        <div className="w-screen h-screen">
            {/* <Navbar /> */}
            <Suspense fallback>
            <div className=" flex justify-center items-center relative top-[5%]">
                <div>
                    {videoData.map((video, index) => (
                        <div
                            key={index}
                            style={{ display: index === slideIndex ? "block" : "none" }}
                        >
                            <VideoComponent
                                src={video.src}
                                poster={video.poster}
                                questions={video.questions}
                                onPlay={handleVideoPlay}
                                onNoQuestions={handleNoQuestions}
                                setShowButtons={setShowButtons}
                            />
                        </div>
                    ))}
                </div>
            </div>
            </Suspense>

            {/* {showButtons && (
                <div className="flex justify-center relative items-center min-h-10v top-[15%] xl:top-[10%] 3xl:top-[8%] gap-30px">
                    <div
                        className="relative w-60px h-60px border-[2px] border-solid border-slate-900 rounded-full flex justify-center items-center cursor-pointer active:bg-slate-300 before::content-none before::absolute before:w-[15px] before:h-[15px] before:top-[15px] before:right-[15px] before:border-t-[3px] before:border-solid before:border-black before:border-r-[3px] before:rotate-225"
                        // style={{ transform: `translate(-2.5px, 2.5px)` }}
                        onClick={() => {
                            plusSlides(-1);
                        }}
                    ></div>
                    <div
                        className="relative w-[60px] h-[60px] border-[2px] border-solid border-slate-900 rounded-full flex justify-center items-center cursor-pointer active:bg-slate-300 before::content-none before::absolute before:w-[15px] before:h-[15px] before:top-[15px] before:right-[15px] before:border-t-[3px] before:border-solid before:border-black before:border-r-[3px] before:rotate-45"
                        // style={{ transform: `translate(-2.5px, 2.5px)` }}
                        onClick={() => {
                            plusSlides(1);
                        }}
                    ></div>
                </div>
            )} */}
            {/* <Footer /> */}
        </div>
    );
};

export default Video2;
