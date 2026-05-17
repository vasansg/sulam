"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { sessions } from "../data/quizzes";

type ScoreEntry = { best: number; total: number; attempts: number };
type Scores = Record<string, ScoreEntry>;

function ScoreBadge({ entry }: { entry: ScoreEntry | undefined }) {
  if (!entry) {
    return (
      <span className="text-xs text-gray-400 font-medium">Not played yet</span>
    );
  }
  const pct = Math.round((entry.best / entry.total) * 100);
  let color = "text-orange-500";
  if (pct === 100) color = "text-yellow-500";
  else if (pct >= 80) color = "text-green-600";
  else if (pct >= 60) color = "text-blue-500";

  return (
    <div className="flex flex-col items-end gap-0.5">
      <span className={`text-sm font-extrabold ${color}`}>
        Best: {entry.best}/{entry.total}
      </span>
      <span className="text-xs text-gray-400">{entry.attempts}x played</span>
    </div>
  );
}

function TotalBar({ scores }: { scores: Scores }) {
  const played = sessions.filter((s) => scores[s.id]);
  if (played.length === 0) return null;

  const totalBest = played.reduce((acc, s) => acc + scores[s.id].best, 0);
  const totalPossible = played.reduce((acc, s) => acc + scores[s.id].total, 0);
  const pct = Math.round((totalBest / totalPossible) * 100);

  return (
    <div className="mb-8 bg-white rounded-2xl shadow-md p-5 border border-indigo-100">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-gray-700">Overall Best Score</span>
        <span className="text-2xl font-extrabold text-indigo-600">
          {totalBest} / {totalPossible}
        </span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
        <div
          className="h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="text-right text-xs text-gray-400 mt-1">
        {played.length} of {sessions.length} sessions played • {pct}% accuracy
      </div>
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
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-700 text-center mb-8">
        Choose a Session Quiz
      </h2>

      {mounted && <TotalBar scores={scores} />}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sessions.map((session) => {
          const entry = mounted ? scores[session.id] : undefined;
          const played = !!entry;

          return (
            <Link
              key={session.id}
              href={`/quiz/${session.id}`}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-r ${session.color} p-5 text-white relative`}>
                {played && (
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs font-bold">
                    ✓ Done
                  </div>
                )}
                <div className="text-4xl mb-2">{session.emoji}</div>
                <div className="text-xs font-semibold opacity-80 mb-1">{session.time}</div>
                <h3 className="text-lg font-extrabold leading-snug">{session.title}</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-sm mb-3">{session.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-indigo-50 text-indigo-600 font-semibold px-3 py-1 rounded-full">
                    5 Questions
                  </span>
                  {mounted ? (
                    <ScoreBadge entry={entry} />
                  ) : (
                    <span className="text-indigo-500 font-bold text-sm group-hover:translate-x-1 transition-transform inline-block">
                      Play →
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <p className="text-center text-gray-400 text-sm mt-10">
        {sessions.length} session quizzes • 5 questions each
      </p>
    </div>
  );
}
