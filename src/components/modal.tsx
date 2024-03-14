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
        }
    };

    const handleTryAgain = () => {
        setSelectedOption(null);
        setShowResult(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 max-w-lg">
                <button
                    className="absolute top-0 right-0 m-4 p-2 text-gray-600 hover:text-gray-900"
                    onClick={onClose}
                >
                    <svg
                        className="w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 9.293L5.293 4.586a1 1 0 00-1.414 1.414L8.586 10l-4.707 4.707a1 1 0 001.414 1.414L10 11.414l4.707 4.707a1 1 0 001.414-1.414L11.414 10l4.707-4.707a1 1 0 00-1.414-1.414L10 9.293z"
                            clipRule="evenodd"
                        />
                    </svg>
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
