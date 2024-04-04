"use client";
import React, { useState } from 'react';
import data from '../../../Quesiton.json';
import { Question } from '@/types';



const Question1 = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const questions: Question[] = data.question1;

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  const cancelSelection = () => {
    setSelectedOption(null);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {showResult ? (
          <div>
            <h2 className="text-xl font-bold mb-4">Result</h2>
            <p className="mb-4">Your score: {score}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={resetQuiz}>Try Again</button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-4">Question {currentQuestion + 1}</h2>
            <p className="mb-4">{questions[currentQuestion].question}</p>
            <ul>
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index} className="mb-2">
                  <button disabled={selectedOption !== null} onClick={() => handleOptionSelect(option)} className={`py-2 px-4 rounded ${selectedOption === option ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'}`}>
                    {option}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between">
              <button className="bg-red-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-600" onClick={cancelSelection}>Cancel</button>

              {selectedOption && (
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600" onClick={handleNextQuestion}>Next</button>

              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Question2 = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const questions: Question[] = data.question2;

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  const cancelSelection = () => {
    setSelectedOption(null);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {showResult ? (
          <div>
            <h2 className="text-xl font-bold mb-4">Result</h2>
            <p className="mb-4">Your score: {score}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={resetQuiz}>Try Again</button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-4">Question {currentQuestion + 1}</h2>
            <p className="mb-4">{questions[currentQuestion].question}</p>
            <ul>
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index} className="mb-2">
                  <button disabled={selectedOption !== null} onClick={() => handleOptionSelect(option)} className={`py-2 px-4 rounded ${selectedOption === option ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'}`}>
                    {option}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between">
              <button className="bg-red-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-600" onClick={cancelSelection}>Cancel</button>

              {selectedOption && (
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600" onClick={handleNextQuestion}>Next</button>

              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Question3 = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const questions: Question[] = data.question3;

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  const cancelSelection = () => {
    setSelectedOption(null);
    if (currentQuestion !== 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {showResult ? (
          <div>
            <h2 className="text-xl font-bold mb-4">Result</h2>
            <p className="mb-4">Your score: {score}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={resetQuiz}>Try Again</button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-4">Question {currentQuestion + 1}</h2>
            <p className="mb-4">{questions[currentQuestion].question}</p>
            <ul>
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index} className="mb-2">
                  <button disabled={selectedOption !== null} onClick={() => handleOptionSelect(option)} className={`py-2 px-4 rounded ${selectedOption === option ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'}`}>
                    {option}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between">
              <button className="bg-red-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-600" onClick={cancelSelection}>Cancel</button>

              {selectedOption && (
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600" onClick={handleNextQuestion}>Next</button>

              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export { Question1, Question2, Question3 };