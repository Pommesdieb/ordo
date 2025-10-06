// ui/ordo-ui/src/lib/utils.ts

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Kombiniert Klassenstrings sicher.
 * Wird in fast allen Shadcn-Komponenten für dynamische Tailwind-Klassen genutzt.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
