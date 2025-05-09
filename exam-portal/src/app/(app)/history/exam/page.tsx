"use client";

import React, { useState } from "react";
import historyQuestions from "./questions";
import { IconClock } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const HistoryExam = () => {
  const router = useRouter();
  const questions = historyQuestions;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(null)
  );

  const handleOptionClick = (index: number) => {
    const updated = [...selectedAnswers];
    updated[currentQuestion] = {
      question: questions[currentQuestion].question,
      selectedOptionIndex: index,
      selectedOptionText: questions[currentQuestion].options[index],
    };
    setSelectedAnswers(updated);
  };

  const handleSubmit = () => {
    sessionStorage.setItem("historyAnswers", JSON.stringify(selectedAnswers));
    router.push("/history/exam/submit");
  };

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1)
      setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="w-full flex justify-between items-center px-8 py-6 shadow-lg bg-stone-900 rounded-md">
        <h1 className="text-lg font-semibold">History Test</h1>
        <div className="text-blue-600 font-semibold flex items-center gap-2">
          <IconClock className="h-5 w-5 text-blue-200" />
          <span>10:00</span>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-400 text-white font-semibold py-1 px-4 rounded cursor-pointer transition duration-200 shadow-lg"
        >
          Submit
        </button>
      </div>

      {/* Question Card */}
      <div className="w-full max-w-2xl rounded-md shadow-lg p-8 text-center bg-stone-900 mx-auto my-auto">
        <h2 className="font-semibold mb-4">
          Question {currentQuestion + 1} of {questions.length}
        </h2>
        <p className="mb-6">{questions[currentQuestion].question}</p>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => {
            const isSelected =
              selectedAnswers[currentQuestion]?.selectedOptionIndex === index;
            return (
              <button
                key={index}
                className={`w-full border rounded py-2 px-4 text-left transition duration-200 ${
                  isSelected
                    ? "bg-sky-600 text-white"
                    : "bg-stone-600 hover:bg-stone-400"
                }`}
                onClick={() => handleOptionClick(index)}
              >
                {index + 1}. {option}
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="w-full max-w-3xl flex justify-between mx-auto mt-[-100px] mb-22">
        <button
          onClick={handlePrev}
          disabled={currentQuestion === 0}
          className="bg-gray-400 hover:bg-gray-300 text-black font-semibold py-2 px-6 rounded disabled:opacity-50 cursor-pointer"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestion === questions.length - 1}
          className="bg-sky-700 hover:bg-sky-400 text-slate-300 font-semibold py-2 px-6 rounded disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HistoryExam;
