"use client";

type Props = {
  score: number;
  total: number;
  onRestart: () => void;
  onHome: () => void;
};

export default function ResultScreen({ score, total, onRestart, onHome }: Props) {
  const pct = Math.round((score / total) * 100);

  let emoji = "😔";
  let message = "Keep practicing — you'll get there!";
  let color = "text-orange-500";

  if (pct === 100) {
    emoji = "🏆";
    message = "Perfect score! You're an AI Expert!";
    color = "text-yellow-500";
  } else if (pct >= 80) {
    emoji = "🌟";
    message = "Amazing! You really know your stuff!";
    color = "text-green-500";
  } else if (pct >= 60) {
    emoji = "👍";
    message = "Good job! Keep exploring AI!";
    color = "text-blue-500";
  }

  return (
    <div className="w-full max-w-md mx-auto text-center">
      <div className="bg-white rounded-3xl shadow-xl p-10">
        <div className="text-7xl mb-4">{emoji}</div>
        <h2 className={`text-3xl font-extrabold mb-2 ${color}`}>{message}</h2>

        <div className="my-8">
          <div className="text-6xl font-black text-indigo-600">{score}/{total}</div>
          <div className="text-gray-500 mt-1">questions correct</div>
        </div>

        {/* Score bar */}
        <div className="w-full bg-gray-100 rounded-full h-5 mb-8 overflow-hidden">
          <div
            className="h-5 rounded-full transition-all duration-1000 bg-gradient-to-r from-indigo-400 to-purple-500"
            style={{ width: `${pct}%` }}
          />
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={onRestart}
            className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 transition-colors"
          >
            Try Again 🔄
          </button>
          <button
            onClick={onHome}
            className="w-full py-4 rounded-xl border-2 border-indigo-200 text-indigo-600 font-bold text-lg hover:bg-indigo-50 transition-colors"
          >
            Back to Sessions 🏠
          </button>
        </div>
      </div>
    </div>
  );
}
