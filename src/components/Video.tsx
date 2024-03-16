import React, { useRef, useEffect, useState } from "react";
import ModalComponent from "../components/modal";
import data from "../data.json"; // Import data.json here

interface VideoComponentProps {
    src: string;
}

interface Question {
    id: string;
    question: string;
    options: string[];
    time: number;
    correct_answer: string;
}

interface Video {
    id: number;
    src: string;
    poster: string;
    questions: Question[];
}

const VideoComponent: React.FC<VideoComponentProps> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videos, setVideos] = useState<Video[]>([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [answered, setAnswered] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

    useEffect(() => {
        setVideos(data);
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        const currentVideo = videos[currentVideoIndex];
        if (
            !video ||
            !currentVideo ||
            !currentVideo.questions.length ||
            currentQuestionIndex >= currentVideo.questions.length
        )
            return;

        const checkTimeAndShowModal = () => {
            const currentQuestion = currentVideo.questions[currentQuestionIndex];
            if (
                !currentQuestion ||
                (video.currentTime >= currentQuestion.time && !answered)
            ) {
                setShowModal(true);
                video.pause();
            }
        };

        const interval = setInterval(checkTimeAndShowModal, 1000);

        return () => clearInterval(interval);
    }, [answered, currentQuestionIndex, videos, currentVideoIndex]);

    const handleVideoEnded = () => {
        setShowModal(false);
    };

    const handleSubmit = (answer: string) => {
        const currentVideo = videos[currentVideoIndex];
        const correctAnswer =
            currentVideo.questions[currentQuestionIndex].correct_answer;
        console.log(correctAnswer + " correctAnswer in video component");
        setShowModal(false);
        if (answer === correctAnswer) {
            console.log("correct answer : " + correctAnswer);
            correctAnswer === null;
            setAnswered(true);
        } else {
            setAnswered(false);
        }

        const video = videoRef.current;
        if (video) {
            // video.play();
        }
    };

    const handleNextQuestion = () => {
        const video = videoRef.current;
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setAnswered(false);
        setSelectedOption(null);
        if (video) {
            video.play();
        }
    };
    const currentVideo = videos[currentVideoIndex];
    const currentQuestion = currentVideo?.questions[currentQuestionIndex];
    return (
        <div>
            {currentVideo ? (
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover select-none rounded-lg transform-style-3d"
                    ref={videoRef}
                    controls
                    src={currentVideo.src}
                    poster={currentVideo.poster}
                    onEnded={handleVideoEnded}
                />
            ) : (
                <p>No video found.</p>
            )}
            {currentQuestion && (
                <ModalComponent
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    onSubmit={handleSubmit}
                    question={currentQuestion.question}
                    options={currentQuestion.options}
                    correctAnswer={currentQuestion.correct_answer}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                />
            )}
            {answered && (
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75 text-white">
                    <div className="text-center">
                        <p className="text-xl font-semibold">Next Question</p>
                        <button
                            onClick={handleNextQuestion}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoComponent;
