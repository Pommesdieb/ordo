import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createTask, listTasks, Task } from "@/lib/api";

export default function TasksPage() {
  const [items, setItems] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  const refresh = () => listTasks().then(setItems);
  useEffect(() => { refresh(); }, []);

  const add = async () => {
    const t = title.trim();
    if (!t) return;
    await createTask(t);
    setTitle("");
    refresh();
  };

  return (
    <div className="max-w-2xl space-y-4">
      <h2 className="text-lg font-semibold">Tasks</h2>
      <div className="flex gap-2">
        <Input
          placeholder="Neue Aufgabe…"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
        />
        <Button onClick={add}>Hinzufügen</Button>
      </div>

      <ul className="list-disc pl-5">
        {items.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}
