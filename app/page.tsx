import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="space-y-4 text-center">
        <h1 className="text-2xl font-semibold">UnionConnect</h1>
        <p>Учебный проект базы знаний для техподдержки.</p>
        <Link
          href="/articles"
          className="inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700"
        >
          Перейти к списку статей
        </Link>
      </main>
    </div>
  );
}