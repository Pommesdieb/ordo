
import { Link, useLocation } from "react-router-dom"
import { Home, CheckSquare, FileText, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { to: "/tasks", icon: CheckSquare, label: "Tasks" },
  { to: "/notes", icon: FileText, label: "Notes" },
  { to: "/settings", icon: Settings, label: "Settings" },
]

export function OrdoNavigation() {
  const { pathname } = useLocation()

  return (
    <nav className="flex flex-col gap-2 p-4 border-r bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)]">
      <Link to="/" className="flex items-center gap-2 mb-6 text-xl font-semibold text-[var(--color-primary)]">
        <Home size={22} />
        Ordo
      </Link>
      {links.map(({ to, icon: Icon, label }) => (
        <Link
          key={to}
          to={to}
          className={cn(
            "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
            pathname === to
              ? "bg-[var(--color-secondary)] text-[var(--color-primary)] font-medium"
              : "hover:bg-[var(--color-secondary)] text-gray-700 dark:text-gray-300"
          )}
        >
          <Icon size={18} />
          {label}
        </Link>
      ))}
    </nav>
  )
}
