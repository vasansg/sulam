import SessionGrid from "./components/SessionGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-6xl mb-4">🤖</div>
          <h1 className="text-4xl font-extrabold mb-3 tracking-tight">
            AI for Daily Life
          </h1>
          <p className="text-xl text-indigo-100 mb-2">
            Empowering School Students with Generative AI
          </p>
          <p className="text-indigo-200 text-sm">
            SULAM Program • Test your knowledge from each session!
          </p>
        </div>
      </div>

      <SessionGrid />
    </div>
  );
}
