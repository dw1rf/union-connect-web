import { ArticlesPage } from "@/src/features/articles/ArticlesPage";
import { articlesMocks } from "@/src/mocks/articles";

export default function ArticlesListPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
      <ArticlesPage articles={articlesMocks} />
      </main>
    </div>
  );
}