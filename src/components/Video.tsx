import React, { useRef, useEffect, useState } from 'react';
import ModalComponent from '../components/modal';
import data from '../data.json'; // Import data.json here

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

const VideoComponent: React.FC<VideoComponentProps> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [answered, setAnswered] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    useEffect(() => {
        setQuestions(data.question1); // Set questions from data.json
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video || !questions.length || currentQuestionIndex >= questions.length) return;
    
        const checkTimeAndShowModal = () => {
            const currentQuestion = questions[currentQuestionIndex];
            if (!currentQuestion || (video.currentTime >= currentQuestion.time && !answered)) {
                setShowModal(true);
                video.pause();
            }
        };
    
        const interval = setInterval(checkTimeAndShowModal, 1000);
    
        return () => clearInterval(interval);
    }, [answered, currentQuestionIndex, questions]);
    

    const handleVideoEnded = () => {
        setShowModal(false); // Ensure modal is closed when video ends
    };

    const handleSubmit = (answer: string) => {
        const correctAnswer = questions[currentQuestionIndex].correct_answer;
        setShowModal(false);
        const video = videoRef.current;

        if (answer === correctAnswer) {
            setAnswered(true);
        } else {
            setAnswered(false);
        }

        if (video) {
            video.play();
        }
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswered(false); // Reset answered state when moving to the next question
        setSelectedOption(null); // Reset selected option when moving to the next question
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>
            <video ref={videoRef} controls src={src} onEnded={handleVideoEnded} />
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
