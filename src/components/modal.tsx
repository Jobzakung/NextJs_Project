import React, { useState } from 'react';

interface ModalComponentProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (answer: string) => void;
    question: string;
    options: string[];
    correctAnswer: string;
    selectedOption: string | null;
    setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
    isOpen,
    onClose,
    onSubmit,
    question,
    options,
    correctAnswer,
    selectedOption,
    setSelectedOption,
}) => {
    const [showResult, setShowResult] = useState<boolean>(false);

    const handleSubmit = () => {
        if (selectedOption) {
            setShowResult(true);
            onSubmit(selectedOption);
            if (selectedOption === correctAnswer) {
                setShowResult(false);
            }
        }
    };

    const handleTryAgain = () => {
        setSelectedOption(null);
        setShowResult(false);
    };
    // console.log(correctAnswer + " correctAnswer")
    // console.log(selectedOption + " selectedOption")
    // console.log(showResult + " showResult")
    if (!isOpen) return null;
 ////inset-0
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 "> 
            <div className="bg-white rounded-lg p-[100px] max-w-lg">
                <button
                    className="absolute top-0 right-0 m-4 p-2 text-gray-600 hover:text-gray-900"
                    onClick={onClose}
                >
                </button>
                <p className="text-xl font-semibold mb-4">{question}</p>
                {options.map((option, index) => (
                    <label key={index} className="flex items-center mb-2">
                        <input
                            type="radio"
                            value={option}
                            checked={selectedOption === option}
                            onChange={() => setSelectedOption(option)}
                            className="mr-2"
                        />
                        {option}
                    </label>
                ))}
                {!showResult ? (
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
                        disabled={!selectedOption}
                    >
                        Submit
                    </button>
                ) : (
                    <div className="mt-4">
                        {selectedOption === correctAnswer ? (
                            <p className="text-green-600">Correct!</p>
                        ) : (
                            <div>
                                <p className="text-red-600">Wrong choice!</p>
                                <p className="text-gray-600">The correct answer is: {correctAnswer}</p>
                            </div>
                        )}
                        <button
                            onClick={handleTryAgain}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
                        >
                            Try Again
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModalComponent;
