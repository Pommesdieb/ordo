import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid md:grid-cols-[220px_1fr]">
      <aside className="p-4 border-r">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Ordo</h1>
        </div>
        <Separator className="my-3" />
        <nav className="space-y-2 text-sm">
          <a href="/" className="block hover:underline">Dashboard</a>
          <a href="/tasks" className="block hover:underline">Tasks</a>
        </nav>
      </aside>
      <main className="p-6">
        <header className="mb-6 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">Digital Life Companion</div>
          <Button asChild variant="secondary"><a href="/tasks">Neue Task</a></Button>
        </header>
        {children}
      </main>
    </div>
  );
}
