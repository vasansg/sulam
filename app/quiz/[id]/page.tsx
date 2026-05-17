import { notFound } from "next/navigation";
import { sessions } from "../../data/quizzes";
import QuizClient from "../../components/QuizClient";

export default async function QuizPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = sessions.find((s) => s.id === id);

  if (!session) notFound();

  return <QuizClient session={session} />;
}
