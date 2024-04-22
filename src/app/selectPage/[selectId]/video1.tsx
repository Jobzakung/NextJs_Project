"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Footer } from "@/components";
import videoData from "@/data.json";
import VideoComponent from "@/components/Video";
import { Navbar } from "@/components";

const Video1 = () => {
    const [videos, setVideos] = useState(videoData);
    const [showButtons, setShowButtons] = useState<boolean>(true);
    const [slideIndex, setSlideIndex] = useState(0);

useEffect(() => {
    plusSlides(0)

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
                    {videoData.map((video, index) => {
                        if (index === 0) {
                            return (
                                <div key={index}>
                                    <VideoComponent
                                        src={video.src}
                                        poster={video.poster}
                                        questions={video.questions}
                                        onPlay={handleVideoPlay}
                                        onNoQuestions={handleNoQuestions}
                                        setShowButtons={setShowButtons}
                                    />
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
            </Suspense>
        </div>
    );
};
export default Video1;
