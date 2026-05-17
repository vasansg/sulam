"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { sessions } from "../data/quizzes";

type ScoreEntry = { best: number; total: number; attempts: number };
type Scores = Record<string, ScoreEntry>;

function StarRow({ best, total }: { best: number; total: number }) {
  return (
    <div className="flex gap-0.5 justify-center">
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={`text-lg ${i < best ? "opacity-100" : "opacity-20"}`}>⭐</span>
      ))}
    </div>
  );
}

function TotalBanner({ scores }: { scores: Scores }) {
  const played = sessions.filter((s) => scores[s.id]);
  if (played.length === 0) return null;

  const totalBest = played.reduce((acc, s) => acc + scores[s.id].best, 0);
  const totalPossible = played.reduce((acc, s) => acc + scores[s.id].total, 0);
  const pct = Math.round((totalBest / totalPossible) * 100);

  const trophy = pct === 100 ? "🏆" : pct >= 80 ? "🌟" : pct >= 60 ? "👍" : "💪";

  return (
    <div className="mb-8 bg-white rounded-3xl shadow-md p-5 border-2 border-indigo-100 text-center">
      <div className="text-4xl mb-1">{trophy}</div>
      <p className="text-sm font-bold text-gray-500 mb-1">Your Total Best Score</p>
      <p className="text-4xl font-extrabold text-indigo-600">
        {totalBest} <span className="text-gray-300 text-2xl">/ {totalPossible}</span>
      </p>
      <div className="w-full bg-gray-100 rounded-full h-4 mt-3 overflow-hidden">
        <div
          className="h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-xs text-gray-400 mt-1">
        {played.length}/{sessions.length} sessions done • {pct}% correct
      </p>
    </div>
  );
}

export default function SessionGrid() {
  const [scores, setScores] = useState<Scores>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const loaded: Scores = {};
    for (const s of sessions) {
      try {
        const raw = localStorage.getItem(`sulam_score_${s.id}`);
        if (raw) loaded[s.id] = JSON.parse(raw);
      } catch {
        // ignore
      }
    }
    setScores(loaded);
    setMounted(true);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-extrabold text-gray-700 text-center mb-6">
        Pick a Session! 👇
      </h2>

      {mounted && <TotalBanner scores={scores} />}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sessions.map((session) => {
          const entry = mounted ? scores[session.id] : undefined;
          const played = !!entry;

          return (
            <Link
              key={session.id}
              href={`/quiz/${session.id}`}
              className="group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:-translate-y-1 active:scale-95"
            >
              <div className={`bg-gradient-to-r ${session.color} p-5 text-white text-center relative`}>
                {played && (
                  <div className="absolute top-3 right-3 bg-white/30 rounded-full px-2 py-0.5 text-xs font-bold">
                    ✓ Done
                  </div>
                )}
                <div className="text-5xl mb-2 animate-float inline-block">{session.emoji}</div>
                <div className="text-xs font-semibold opacity-75 mb-1">{session.time}</div>
                <h3 className="text-base font-extrabold">{session.title}</h3>
              </div>

              <div className="p-4 text-center">
                <p className="text-gray-500 text-xs mb-3">{session.description}</p>

                {mounted && entry ? (
                  <div className="space-y-1">
                    <StarRow best={entry.best} total={entry.total} />
                    <p className="text-xs text-gray-400">{entry.best}/{entry.total} best • {entry.attempts}x played</p>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-indigo-50 text-indigo-600 font-semibold px-3 py-1 rounded-full">
                      5 Questions
                    </span>
                    <span className="text-indigo-500 font-bold text-sm group-hover:translate-x-1 transition-transform inline-block">
                      Play →
                    </span>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <p className="text-center text-gray-400 text-xs mt-8">
        {sessions.length} sessions • 5 questions each
      </p>
    </div>
  );
}
