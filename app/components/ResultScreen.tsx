"use client";

type Props = {
  score: number;
  total: number;
  onRestart: () => void;
  onHome: () => void;
};

export default function ResultScreen({ score, total, onRestart, onHome }: Props) {
  const pct = Math.round((score / total) * 100);

  const result =
    pct === 100 ? { emoji: "🏆", title: "PERFECT!", msg: "You're an AI Expert!", color: "text-yellow-500", bg: "from-yellow-400 to-orange-400" } :
    pct >= 80  ? { emoji: "🌟", title: "Amazing!", msg: "You really know your stuff!", color: "text-green-500", bg: "from-green-400 to-emerald-500" } :
    pct >= 60  ? { emoji: "👍", title: "Good Job!", msg: "Keep exploring AI!", color: "text-blue-500", bg: "from-blue-400 to-cyan-500" } :
                 { emoji: "💪", title: "Keep Going!", msg: "Practice makes perfect!", color: "text-purple-500", bg: "from-purple-400 to-pink-500" };

  const stars = Array.from({ length: total }, (_, i) => i < score);

  return (
    <div className="w-full max-w-sm mx-auto text-center animate-bounce-in">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Top band */}
        <div className={`bg-gradient-to-r ${result.bg} py-8 px-6`}>
          <div className="text-8xl mb-2 animate-float inline-block">{result.emoji}</div>
          <h2 className="text-3xl font-extrabold text-white">{result.title}</h2>
          <p className="text-white/90 mt-1">{result.msg}</p>
        </div>

        <div className="p-6">
          {/* Score */}
          <div className="text-6xl font-black text-indigo-600 mb-1">
            {score}<span className="text-gray-300">/{total}</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">questions correct</p>

          {/* Star row */}
          <div className="flex justify-center gap-2 mb-6">
            {stars.map((got, i) => (
              <span key={i} className={`text-3xl transition-all ${got ? "animate-pop" : "opacity-20"}`}
                style={{ animationDelay: `${i * 0.1}s` }}>
                ⭐
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={onRestart}
              className="w-full py-4 rounded-2xl bg-indigo-600 text-white font-extrabold text-lg hover:bg-indigo-700 active:scale-95 transition-all"
            >
              Try Again 🔄
            </button>
            <button
              onClick={onHome}
              className="w-full py-4 rounded-2xl border-2 border-indigo-200 text-indigo-600 font-bold text-lg hover:bg-indigo-50 active:scale-95 transition-all"
            >
              All Sessions 🏠
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
