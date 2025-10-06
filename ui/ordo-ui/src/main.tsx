import "./index.css";
import "./index.css";
import "./index.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen grid place-items-center bg-yellow-200">
      <div className="text-xl p-6 rounded-xl border shadow-sm">
        Hallo Ordo 👋 <span className="text-blue-600 font-bold">Tailwind aktiv!</span>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
