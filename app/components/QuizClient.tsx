"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Session } from "../data/quizzes";
import QuizCard from "./QuizCard";
import ResultScreen from "./ResultScreen";

type Props = { session: Session };

export default function QuizClient({ session }: Props) {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  function saveScore(finalScore: number) {
    try {
      const key = `sulam_score_${session.id}`;
      const prev = JSON.parse(localStorage.getItem(key) ?? "{}");
      localStorage.setItem(
        key,
        JSON.stringify({
          best: Math.max(finalScore, prev.best ?? 0),
          total: session.questions.length,
          attempts: (prev.attempts ?? 0) + 1,
        })
      );
    } catch {
      // localStorage unavailable — ignore
    }
  }

  function handleNext(correct: boolean) {
    const newScore = correct ? score + 1 : score;
    if (currentQ + 1 >= session.questions.length) {
      setScore(newScore);
      setDone(true);
      saveScore(newScore);
    } else {
      setScore(newScore);
      setCurrentQ((q) => q + 1);
    }
  }

  function handleRestart() {
    setCurrentQ(0);
    setScore(0);
    setDone(false);
  }

  return (
    <div className={`min-h-screen ${session.bgColor} py-8 px-4`}>
      <div className="max-w-2xl mx-auto mb-8">
        <button
          onClick={() => router.push("/")}
          className="text-gray-500 hover:text-gray-700 font-medium mb-4 flex items-center gap-1"
        >
          ← Back
        </button>
        <div className={`bg-gradient-to-r ${session.color} rounded-2xl p-6 text-white shadow-lg`}>
          <div className="text-4xl mb-2">{session.emoji}</div>
          <h1 className="text-2xl font-extrabold">{session.title}</h1>
          <p className="text-white/80 text-sm mt-1">{session.description}</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        {done ? (
          <ResultScreen
            score={score}
            total={session.questions.length}
            onRestart={handleRestart}
            onHome={() => router.push("/")}
          />
        ) : (
          <QuizCard
            question={session.questions[currentQ]}
            questionNumber={currentQ + 1}
            total={session.questions.length}
            onNext={handleNext}
          />
        )}
      </div>
    </div>
  );
}
