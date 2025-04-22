"use client";

import { useEffect, useState } from "react";
import historyQuestions from "../questions";

type Answer = {
  question: string;
  selectedOptionIndex: number;
  selectedOptionText: string;
};

const ResultPage = () => {
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const stored = sessionStorage.getItem("historyAnswers");
    if (stored) {
      const parsedAnswers: Answer[] = JSON.parse(stored);
      setUserAnswers(parsedAnswers);

      // Calculate score
      const calculatedScore = parsedAnswers.reduce((acc, ans, index) => {
        if (ans?.selectedOptionIndex === historyQuestions[index].answer) {
          return acc + 1;
        }
        return acc;
      }, 0);

      setScore(calculatedScore);
    }
  }, []);

  return (
    <div className="p-14 min-h-screen bg-neutral-900 rounded-lg">
      <h1 className="text-2xl font-bold text-slate-200 mb-2">
        You have successfully submitted your answers! 😎
      </h1>

      <h2 className="text-xl font-semibold text-green-300 mb-8 mt-2">
        🎯 You scored : {score} out of {historyQuestions.length}
      </h2>

      <div className="space-y-6">
        {historyQuestions.map((q, i) => {
          const userAnswer = userAnswers[i];
          const isCorrect = userAnswer?.selectedOptionIndex === q.answer;

          return (
            <div
              key={i}
              className="bg-neutral-700 p-4 rounded shadow border-l-6"
              style={{
                borderColor: isCorrect ? "green" : "red",
              }}
            >
              <h2 className="font-semibold mb-2">
                Q{i + 1}. {q.question}
              </h2>

              <p>
                <span className="font-medium">Your Answer: </span>
                <span className={isCorrect ? "text-green-400" : "text-red-400"}>
                  {userAnswer?.selectedOptionText || "Not Answered"}
                </span>
              </p>

              <p>
                <span className="font-medium">Correct Answer: </span>
                <span className="text-green-600">{q.options[q.answer]}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultPage;
