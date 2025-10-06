import { OrdoNavigation } from "./OrdoNavigation"

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)]">
      <aside className="hidden md:flex w-60">
        <OrdoNavigation />
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
