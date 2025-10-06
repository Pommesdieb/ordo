import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <AppShell>
      <section className="card p-6">
        <h1 className="text-2xl font-semibold mb-2">Willkommen bei Ordo</h1>
        <p className="text-muted mb-4">SSoT • Tasks • Notes • LLM-Assist</p>
        <div className="flex gap-2">
          <Button variant="primary">Neue Aufgabe</Button>
          <Button variant="secondary">Einstellungen</Button>
        </div>
      </section>
    </AppShell>
  );
}
