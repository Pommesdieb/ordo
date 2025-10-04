import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppShell from "@/components/AppShell";
import TasksPage from "@/pages/Tasks";

function Dashboard() {
  return <div>Willkommen bei Ordo 👋</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}
