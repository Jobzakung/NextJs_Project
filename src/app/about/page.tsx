"use client";
import React from 'react';
import VideoComponent from '../../components/Video';
import data from '../../data.json';

const MainComponent: React.FC = () => {
    return (
        <div>
            {data.map((video, index) => (
                <VideoComponent key={index} src={video.src}/>
            ))}
        </div>
    );
};

export default MainComponent;
