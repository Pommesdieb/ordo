import { ReactNode } from "react";
import { Menu } from "lucide-react";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-app text-app">
      <header className="sticky top-0 z-[900] bg-surface/90 backdrop-blur border-b">
        <div className="container flex items-center gap-3 h-14">
          <img src="/logo.png" alt="Ordo" className="h-7 w-7" />
          <span className="font-semibold">Ordo</span>
          <div className="ml-auto flex items-center gap-2">
            <button className="btn btn-ghost"><Menu className="h-5 w-5" /></button>
          </div>
        </div>
      </header>

      <div className="container grid lg:grid-cols-[260px_1fr] gap-6 py-6">
        <aside className="hidden lg:block">
          <nav className="card p-3">
            <a className="block px-3 py-2 rounded hover:bg-black/5 dark:hover:bg-white/5" href="/tasks">Tasks</a>
            <a className="block px-3 py-2 rounded hover:bg-black/5 dark:hover:bg-white/5" href="/notes">Notes</a>
            <a className="block px-3 py-2 rounded hover:bg-black/5 dark:hover:bg-white/5" href="/settings">Settings</a>
          </nav>
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
