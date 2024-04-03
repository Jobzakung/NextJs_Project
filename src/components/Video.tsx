import React, { useRef, useEffect, useState } from "react";
import ModalComponent from "../components/modal";
import { on } from "events";

interface VideoComponentProps {
    src: string;
    questions: {
        id: string;
        question: string;
        options: string[];
        time: number;
        correct_answer: string;
    }[];
    poster?: string;
    onPlay?: () => void;
    onNoQuestions?: () => void;
    setShowButtons: React.Dispatch<React.SetStateAction<boolean>>;
}

const VideoComponent: React.FC<VideoComponentProps> = ({
    src,
    poster,
    questions,
    onPlay,
    onNoQuestions,
    setShowButtons,
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [answered, setAnswered] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

    useEffect(() => {
        const video = videoRef.current;
        if (!video || !questions.length) return;

        const interval = setInterval(() => {
            const currentQuestion = questions[currentQuestionIndex];
            if (currentQuestion && video.currentTime >= currentQuestion.time) {
                if (currentQuestionIndex === questions.length - 1 && !answered) {
                    setShowModal(true);
                    video.pause();
                } else if (!answered) {
                    setShowModal(true);
                    video.pause();
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [answered, currentQuestionIndex, questions]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        //have questions == onPlay setbuttons to false hide buttons
        const handleVideoPlay = () => {
            if (onPlay) {
                onPlay();
            }
        };
        //no questions == onNoQuestions setbuttons to true show buttons
        const handleVideoPause = () => {
            if (
                questions.length === 0 ||
                currentQuestionIndex === questions.length ||
                showModal === false
            ) {
                if (onNoQuestions) {
                    onNoQuestions();
                }
            }
        };

        video.addEventListener("play", handleVideoPlay);
        video.addEventListener("pause", handleVideoPause);

        return () => {
            video.removeEventListener("play", handleVideoPlay);
            video.removeEventListener("pause", handleVideoPause);
        };
    }, [currentQuestionIndex, questions]);

    useEffect(() => {
        if (showModal === true) {
            setShowButtons(false); // เมื่อ showModal เป็น true ให้ setShowButtons เป็น false
        } else {
            setShowButtons(true); // เมื่อ showModal เป็น false ให้ setShowButtons เป็น true
        }
    }, [showModal, setShowButtons]);

    const handleVideoEnded = async () => {
        const video = videoRef.current;
        setShowModal(false);
        // setCurrentQuestionIndex(0);
        setAnswered(false);
        if (video) {
            video.pause();
        }
    };
    const handleSubmit = (answer: string) => {
        const currentQuestion = questions[currentQuestionIndex];
        const correctAnswer = currentQuestion.correct_answer;
        setShowModal(false);
        setAnswered(answer === correctAnswer);
        setSelectedOption(null);
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setAnswered(false);
        setSelectedOption(null);
        const video = videoRef.current;
        if (video) {
            video.play();
        }
    };

    const handleTryAgain = () => {
        const video = videoRef.current;
        if (
            (video && video.currentTime === 0) ||
            (video && video.currentTime <= 1)
        ) {
            console.log(video.currentTime + " video.currentTime");
            setCurrentQuestionIndex(0);
        }
    };
    const handleShowButtons = () => {
        if (onPlay) {
            onPlay();
        }
    };

    const Text = "Next";
    const currentQuestion = questions[currentQuestionIndex];

    // console.log(currentQuestionIndex + " currentQuestionIndex");
    return (
        <div>
            <div className="flex justify-center items-center relative w-[340px] sm:w-[768px] xl:w-[1000px] 3xl:w-[1440px]">
                <video
                    className=" h-[240px] sm:h-[480px] xl:h-[600px] 3xl:h-[820px] w-[340px] sm:w-[768px] xl:w-[1100px] 3xl:w-[1440px]"
                    ref={videoRef}
                    controls
                    src={src}
                    poster={poster}
                    onPlay={handleTryAgain}
                    onEnded={handleVideoEnded}
                />
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
                                {Text}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoComponent;
