"use client";

import { useEffect, useState } from "react";
import historyQuestions from "../questions";

const ResultPage = () => {
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  useEffect(() => {
    const stored = sessionStorage.getItem("historyAnswers");
    if (stored) {
      setUserAnswers(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="p-14 min-h-screen bg-neutral-900 rounded-lg">
      <h1 className="text-2xl font-bold text-slate-200 mb-6">
        😎 You have successfully submitted your answers!
      </h1>

      <div className="space-y-6">
        {historyQuestions.map((q, i) => {
          const userAnswer = userAnswers[i];
          const isCorrect = userAnswer === q.answer;

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
                <span className={isCorrect ? "text-green-600" : "text-red-600"}>
                  {userAnswer !== null && userAnswer !== undefined
                    ? q.options[userAnswer]
                    : "Not Answered"}
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
