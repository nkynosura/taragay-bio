"use client"

import { Home, FileText, User, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activeItem: string
  onItemClick: (item: string) => void
}

const menuItems = [
  { id: "anasayfa", label: "Anasayfa", icon: Home },
  { id: "raporlar", label: "Raporlar", icon: FileText },
  { id: "profil", label: "Profil", icon: User },
  { id: "yardim", label: "Yardım", icon: HelpCircle },
]

export function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground flex flex-col min-h-screen">
      {/* Logo */}
      <div className="p-4 pb-3">
        <button
          onClick={() => onItemClick("anasayfa")}
          className="block w-full rounded-xl border border-sidebar-border/70 bg-sidebar-accent/20 p-1 backdrop-blur transition-colors hover:bg-sidebar-accent/35"
          aria-label="Anasayfaya git"
        >
          <img
            src="/taragay-logo.png"
            alt="Taragay Bio Logo"
            className="w-full h-auto object-contain"
          />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 pb-6">
        <ul className="flex h-full flex-col justify-center gap-3">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeItem === item.id
            return (
              <li key={item.id}>
                <button
                  onClick={() => onItemClick(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-sidebar-accent text-sidebar-foreground"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
