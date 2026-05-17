"use client";

import { useState } from "react";
import type { Question } from "../data/quizzes";

type Props = {
  question: Question;
  questionNumber: number;
  total: number;
  onNext: (correct: boolean) => void;
};

export default function QuizCard({ question, questionNumber, total, onNext }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  function handleSelect(idx: number) {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
  }

  function handleNext() {
    const correct = selected === question.answer;
    setSelected(null);
    setRevealed(false);
    onNext(correct);
  }

  const isCorrect = selected === question.answer;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-6">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-3 rounded-full transition-all duration-300 ${
              i < questionNumber - 1
                ? "w-8 bg-indigo-500"
                : i === questionNumber - 1
                ? "w-8 bg-indigo-400 animate-pulse"
                : "w-3 bg-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Question card */}
      <div className="bg-white rounded-3xl shadow-lg p-6 mb-5 text-center">
        <div className="text-6xl mb-4 animate-float inline-block">{question.emoji}</div>
        <p className="text-xl font-bold text-gray-800 leading-snug">
          {question.question}
        </p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {question.options.map((option, idx) => {
          const isAnswer = idx === question.answer;
          const isChosen = idx === selected;

          let base =
            "flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-3 font-semibold text-sm transition-all duration-200 min-h-[90px] ";

          if (!revealed) {
            base += "border-gray-200 bg-white hover:border-indigo-400 hover:bg-indigo-50 hover:scale-105 cursor-pointer active:scale-95";
          } else if (isAnswer) {
            base += "border-green-400 bg-green-50 animate-bounce-in";
          } else if (isChosen) {
            base += "border-red-300 bg-red-50 animate-shake";
          } else {
            base += "border-gray-100 bg-gray-50 opacity-40";
          }

          return (
            <button key={idx} className={base} onClick={() => handleSelect(idx)}>
              <span className="text-3xl">{option.emoji}</span>
              <span className={`text-center leading-tight ${
                isAnswer && revealed ? "text-green-700" :
                isChosen && revealed ? "text-red-600" : "text-gray-700"
              }`}>
                {option.label}
              </span>
              {revealed && isAnswer && (
                <span className="text-green-500 font-black text-lg">✓</span>
              )}
              {revealed && isChosen && !isAnswer && (
                <span className="text-red-400 font-black text-lg">✗</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {revealed && (
        <div
          className={`rounded-2xl p-4 mb-4 text-center animate-bounce-in ${
            isCorrect
              ? "bg-green-50 border-2 border-green-200"
              : "bg-orange-50 border-2 border-orange-200"
          }`}
        >
          <div className="text-3xl mb-1">{isCorrect ? "🎉" : "💡"}</div>
          <p className={`font-semibold text-sm ${isCorrect ? "text-green-700" : "text-orange-700"}`}>
            {question.explanation}
          </p>
        </div>
      )}

      {revealed && (
        <button
          onClick={handleNext}
          className="w-full py-4 rounded-2xl bg-indigo-600 text-white font-extrabold text-lg hover:bg-indigo-700 active:scale-95 transition-all shadow-lg animate-bounce-in"
        >
          {questionNumber === total ? "See My Score! 🏆" : "Next →"}
        </button>
      )}
    </div>
  );
}
