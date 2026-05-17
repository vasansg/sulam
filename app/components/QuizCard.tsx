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
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span>Question {questionNumber} of {total}</span>
          <span>{Math.round((questionNumber / total) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-indigo-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${(questionNumber / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
        <p className="text-lg font-semibold text-gray-800 leading-relaxed">
          {question.question}
        </p>
      </div>

      {/* Options */}
      <div className="grid gap-3 mb-4">
        {question.options.map((option, idx) => {
          let style =
            "w-full text-left px-5 py-4 rounded-xl border-2 font-medium transition-all duration-200 text-gray-700 ";

          if (!revealed) {
            style += "border-gray-200 bg-white hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer";
          } else if (idx === question.answer) {
            style += "border-green-500 bg-green-50 text-green-800";
          } else if (idx === selected) {
            style += "border-red-400 bg-red-50 text-red-700";
          } else {
            style += "border-gray-200 bg-gray-50 opacity-60";
          }

          return (
            <button key={idx} className={style} onClick={() => handleSelect(idx)}>
              <span className="inline-block w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold mr-3 text-center leading-7">
                {String.fromCharCode(65 + idx)}
              </span>
              {option}
              {revealed && idx === question.answer && " ✓"}
              {revealed && idx === selected && idx !== question.answer && " ✗"}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {revealed && (
        <div
          className={`rounded-xl p-4 mb-4 text-sm leading-relaxed ${
            isCorrect
              ? "bg-green-50 border border-green-200 text-green-800"
              : "bg-orange-50 border border-orange-200 text-orange-800"
          }`}
        >
          <span className="font-bold text-base">{isCorrect ? "🎉 Correct!" : "💡 Not quite!"} </span>
          {question.explanation}
        </div>
      )}

      {revealed && (
        <button
          onClick={handleNext}
          className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 transition-colors shadow-md"
        >
          {questionNumber === total ? "See My Results 🏆" : "Next Question →"}
        </button>
      )}
    </div>
  );
}
